import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../index';

// Validation schemas
const mealItemSchema = z.object({
  foodItemId: z.number().int().positive(),
  quantity: z.number().positive(),
});

const createMealSchema = z.object({
  type: z.enum(['BREAKFAST', 'LUNCH', 'DINNER', 'SNACK']),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  mealItems: z.array(mealItemSchema).min(1),
});

const updateMealSchema = z.object({
  type: z.enum(['BREAKFAST', 'LUNCH', 'DINNER', 'SNACK']).optional(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }).optional(),
  mealItems: z.array(mealItemSchema).min(1).optional(),
});

// Adding proper type interfaces to avoid implicit any errors

interface FoodItem {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  servingSize: number;
}

interface MealItem {
  foodItem: FoodItem;
  quantity: number;
}

interface Meal {
  id: number;
  userId: number;
  date: Date;
  type: string;
  mealItems: MealItem[];
}

interface PrismaTransaction {
  meal: any;
  mealItem: any;
  dailyStats: any;
}

// Get meals by date
export const getMealsByDate = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;
    const dateStr = req.params.date;
    const date = new Date(dateStr);

    if (isNaN(date.getTime())) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    // Set time to start of day
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);

    // Set time to end of day
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    const meals = await prisma.meal.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        mealItems: {
          include: {
            foodItem: true,
          },
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    // Loop through meals and calculate totals for each
    const mealsWithTotals = meals.map((meal: any) => {
      const mealTotals = {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      };

      meal.mealItems.forEach((item: any) => {
        const { foodItem, quantity } = item;
        const ratio = quantity / foodItem.servingSize;

        mealTotals.calories += foodItem.calories * ratio;
        mealTotals.protein += foodItem.protein * ratio;
        mealTotals.carbs += foodItem.carbs * ratio;
        mealTotals.fat += foodItem.fat * ratio;
      });

      return {
        ...meal,
        totals: mealTotals,
      };
    });

    // Calculate day totals
    const dayTotals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    };

    mealsWithTotals.forEach((meal) => {
      dayTotals.calories += meal.totals.calories;
      dayTotals.protein += meal.totals.protein;
      dayTotals.carbs += meal.totals.carbs;
      dayTotals.fat += meal.totals.fat;
    });

    // Update or create daily stats
    await prisma.dailyStats.upsert({
      where: {
        userId_date: {
          userId,
          date: startDate,
        },
      },
      update: {
        calories: dayTotals.calories,
        protein: dayTotals.protein,
        carbs: dayTotals.carbs,
        fat: dayTotals.fat,
      },
      create: {
        userId,
        date: startDate,
        calories: dayTotals.calories,
        protein: dayTotals.protein,
        carbs: dayTotals.carbs,
        fat: dayTotals.fat,
        calorieGoal: 2000, // Default values, will be updated from profile
        proteinGoal: 150,
        carbsGoal: 200,
        fatGoal: 70,
      },
    });

    res.json({
      date: dateStr,
      meals: mealsWithTotals,
      dayTotals,
    });
  } catch (error) {
    console.error('Get meals by date error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single meal
export const getMealById = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;
    const mealId = parseInt(req.params.id);

    if (isNaN(mealId)) {
      return res.status(400).json({ message: 'Invalid meal ID' });
    }

    const meal = await prisma.meal.findUnique({
      where: {
        id: mealId,
      },
      include: {
        mealItems: {
          include: {
            foodItem: true,
          },
        },
      },
    });

    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }

    if (meal.userId !== userId) {
      return res.status(403).json({ message: 'Not authorized to access this meal' });
    }

    // Calculate meal totals
    const totals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    };

    meal.mealItems.forEach((item) => {
      const { foodItem, quantity } = item;
      const ratio = quantity / foodItem.servingSize;

      totals.calories += foodItem.calories * ratio;
      totals.protein += foodItem.protein * ratio;
      totals.carbs += foodItem.carbs * ratio;
      totals.fat += foodItem.fat * ratio;
    });

    res.json({
      ...meal,
      totals,
    });
  } catch (error) {
    console.error('Get meal error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new meal
export const createMeal = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;

    // Validate request body
    const validatedData = createMealSchema.parse(req.body);
    const mealDate = new Date(validatedData.date);

    // Check if all food items exist
    const foodItemIds = validatedData.mealItems.map((item) => item.foodItemId);
    const foodItems = await prisma.foodItem.findMany({
      where: {
        id: {
          in: foodItemIds,
        },
      },
    });

    if (foodItems.length !== foodItemIds.length) {
      return res.status(400).json({ message: 'One or more food items not found' });
    }

    // Create meal with items in a transaction
    const meal = await prisma.$transaction(async (tx) => {
      // Create meal
      const newMeal = await tx.meal.create({
        data: {
          userId,
          type: validatedData.type,
          date: mealDate,
          mealItems: {
            create: validatedData.mealItems.map((item) => ({
              foodItemId: item.foodItemId,
              quantity: item.quantity,
            })),
          },
        },
        include: {
          mealItems: {
            include: {
              foodItem: true,
            },
          },
        },
      });

      return newMeal;
    });

    // Calculate meal totals
    const totals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    };

    meal.mealItems.forEach((item) => {
      const { foodItem, quantity } = item;
      const ratio = quantity / foodItem.servingSize;

      totals.calories += foodItem.calories * ratio;
      totals.protein += foodItem.protein * ratio;
      totals.carbs += foodItem.carbs * ratio;
      totals.fat += foodItem.fat * ratio;
    });

    // Update daily stats
    const startDate = new Date(mealDate);
    startDate.setHours(0, 0, 0, 0);

    // Get current daily stats
    const dailyStats = await prisma.dailyStats.findUnique({
      where: {
        userId_date: {
          userId,
          date: startDate,
        },
      },
    });

    if (dailyStats) {
      // Update existing stats
      await prisma.dailyStats.update({
        where: {
          id: dailyStats.id,
        },
        data: {
          calories: dailyStats.calories + totals.calories,
          protein: dailyStats.protein + totals.protein,
          carbs: dailyStats.carbs + totals.carbs,
          fat: dailyStats.fat + totals.fat,
        },
      });
    } else {
      // Create new stats
      await prisma.dailyStats.create({
        data: {
          userId,
          date: startDate,
          calories: totals.calories,
          protein: totals.protein,
          carbs: totals.carbs,
          fat: totals.fat,
          calorieGoal: 2000, // Default values, will be updated from profile
          proteinGoal: 150,
          carbsGoal: 200,
          fatGoal: 70,
        },
      });
    }

    res.status(201).json({
      ...meal,
      totals,
    });
  } catch (error) {
    console.error('Create meal error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a meal
export const updateMeal = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;
    const mealId = parseInt(req.params.id);

    if (isNaN(mealId)) {
      return res.status(400).json({ message: 'Invalid meal ID' });
    }

    // Validate request body
    const validatedData = updateMealSchema.parse(req.body);

    // Get existing meal
    const existingMeal = await prisma.meal.findUnique({
      where: {
        id: mealId,
      },
      include: {
        mealItems: {
          include: {
            foodItem: true,
          },
        },
      },
    });

    if (!existingMeal) {
      return res.status(404).json({ message: 'Meal not found' });
    }

    if (existingMeal.userId !== userId) {
      return res.status(403).json({ message: 'Not authorized to update this meal' });
    }

    // Check if all food items exist if mealItems are provided
    if (validatedData.mealItems && validatedData.mealItems.length > 0) {
      const foodItemIds = validatedData.mealItems.map((item) => item.foodItemId);
      const foodItems = await prisma.foodItem.findMany({
        where: {
          id: {
            in: foodItemIds,
          },
        },
      });

      if (foodItems.length !== foodItemIds.length) {
        return res.status(400).json({ message: 'One or more food items not found' });
      }
    }

    // Calculate old meal totals for updating daily stats
    const oldTotals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    };

    existingMeal.mealItems.forEach((item: any) => {
      const { foodItem, quantity } = item;
      const ratio = quantity / foodItem.servingSize;

      oldTotals.calories += foodItem.calories * ratio;
      oldTotals.protein += foodItem.protein * ratio;
      oldTotals.carbs += foodItem.carbs * ratio;
      oldTotals.fat += foodItem.fat * ratio;
    });

    // Get mealDate
    const mealDate = validatedData.date ? new Date(validatedData.date) : existingMeal.date;
    const startDate = new Date(mealDate);
    startDate.setHours(0, 0, 0, 0);

    // Update meal in a transaction
    const updatedMeal = await prisma.$transaction(async (tx: any) => {
      // Delete existing meal items if new ones are provided
      if (validatedData.mealItems) {
        await tx.mealItem.deleteMany({
          where: {
            mealId,
          },
        });

        // Create new meal items
        for (const item of validatedData.mealItems) {
          await tx.mealItem.create({
            data: {
              mealId,
              foodItemId: item.foodItemId,
              quantity: item.quantity,
            },
          });
        }
      }

      // Update meal
      const updateData: any = {};
      if (validatedData.type) updateData.type = validatedData.type;
      if (validatedData.date) updateData.date = mealDate;

      const updated = await tx.meal.update({
        where: {
          id: mealId,
        },
        data: updateData,
        include: {
          mealItems: {
            include: {
              foodItem: true,
            },
          },
        },
      });

      return updated;
    });

    // Calculate new meal totals
    const newTotals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    };

    updatedMeal.mealItems.forEach((item: any) => {
      const { foodItem, quantity } = item;
      const ratio = quantity / foodItem.servingSize;

      newTotals.calories += foodItem.calories * ratio;
      newTotals.protein += foodItem.protein * ratio;
      newTotals.carbs += foodItem.carbs * ratio;
      newTotals.fat += foodItem.fat * ratio;
    });

    // Update daily stats
    const dailyStats = await prisma.dailyStats.findUnique({
      where: {
        userId_date: {
          userId,
          date: startDate,
        },
      },
    });

    if (dailyStats) {
      // Calculate difference
      const caloriesDiff = newTotals.calories - oldTotals.calories;
      const proteinDiff = newTotals.protein - oldTotals.protein;
      const carbsDiff = newTotals.carbs - oldTotals.carbs;
      const fatDiff = newTotals.fat - oldTotals.fat;

      // Update stats
      await prisma.dailyStats.update({
        where: {
          id: dailyStats.id,
        },
        data: {
          calories: Math.max(0, dailyStats.calories + caloriesDiff),
          protein: Math.max(0, dailyStats.protein + proteinDiff),
          carbs: Math.max(0, dailyStats.carbs + carbsDiff),
          fat: Math.max(0, dailyStats.fat + fatDiff),
        },
      });
    }

    res.json({
      ...updatedMeal,
      totals: newTotals,
    });
  } catch (error) {
    console.error('Update meal error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a meal
export const deleteMeal = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;
    const mealId = parseInt(req.params.id);

    if (isNaN(mealId)) {
      return res.status(400).json({ message: 'Invalid meal ID' });
    }

    // Get existing meal to check ownership and update daily stats
    const existingMeal = await prisma.meal.findUnique({
      where: {
        id: mealId,
      },
      include: {
        mealItems: {
          include: {
            foodItem: true,
          },
        },
      },
    });

    if (!existingMeal) {
      return res.status(404).json({ message: 'Meal not found' });
    }

    if (existingMeal.userId !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this meal' });
    }

    // Calculate meal totals for updating daily stats
    const totals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    };

    existingMeal.mealItems.forEach((item: any) => {
      const { foodItem, quantity } = item;
      const ratio = quantity / foodItem.servingSize;

      totals.calories += foodItem.calories * ratio;
      totals.protein += foodItem.protein * ratio;
      totals.carbs += foodItem.carbs * ratio;
      totals.fat += foodItem.fat * ratio;
    });

    // Delete meal and update stats in a transaction
    await prisma.$transaction(async (tx: any) => {
      // Delete meal (will cascade delete meal items)
      await tx.meal.delete({
        where: {
          id: mealId,
        },
      });

      // Get date from meal for daily stats
      const mealDate = new Date(existingMeal.date);
      const startDate = new Date(mealDate);
      startDate.setHours(0, 0, 0, 0);

      // Update daily stats
      const dailyStats = await tx.dailyStats.findUnique({
        where: {
          userId_date: {
            userId,
            date: startDate,
          },
        },
      });

      if (dailyStats) {
        await tx.dailyStats.update({
          where: {
            id: dailyStats.id,
          },
          data: {
            calories: Math.max(0, dailyStats.calories - totals.calories),
            protein: Math.max(0, dailyStats.protein - totals.protein),
            carbs: Math.max(0, dailyStats.carbs - totals.carbs),
            fat: Math.max(0, dailyStats.fat - totals.fat),
          },
        });
      }
    });

    res.json({ message: 'Meal deleted successfully' });
  } catch (error) {
    console.error('Delete meal error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Calculate meal totals
const calculateMealTotals = (mealItems: MealItem[]) => {
  return mealItems.reduce((totals, item: MealItem) => {
    const { foodItem, quantity } = item;
    const ratio = quantity / foodItem.servingSize;

    totals.calories += foodItem.calories * ratio;
    totals.protein += foodItem.protein * ratio;
    totals.carbs += foodItem.carbs * ratio;
    totals.fat += foodItem.fat * ratio;

    return totals;
  }, {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });
}; 