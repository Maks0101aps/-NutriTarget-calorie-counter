import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../index';

// Validation schemas
const userGoalSchema = z.object({
  startWeight: z.number().positive(),
  targetWeight: z.number().positive(),
  endDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
});

const updateUserGoalSchema = z.object({
  startWeight: z.number().positive().optional(),
  targetWeight: z.number().positive().optional(),
  endDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }).optional(),
  achieved: z.boolean().optional(),
});

// Get daily stats
export const getDailyStats = async (req: Request, res: Response) => {
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

    // Get daily stats
    const dailyStats = await prisma.dailyStats.findUnique({
      where: {
        userId_date: {
          userId,
          date: startDate,
        },
      },
    });

    if (!dailyStats) {
      // Create default stats if not found
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          gender: true,
          weight: true,
          height: true,
          age: true,
          activityLevel: true,
          goal: true,
        },
      });

      // Define default goals
      let calorieGoal = 2000;
      let proteinGoal = 150;
      let carbsGoal = 200;
      let fatGoal = 70;

      // Create new stats
      const newDailyStats = await prisma.dailyStats.create({
        data: {
          userId,
          date: startDate,
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          calorieGoal,
          proteinGoal,
          carbsGoal,
          fatGoal,
        },
      });

      return res.json(newDailyStats);
    }

    res.json(dailyStats);
  } catch (error) {
    console.error('Get daily stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get weekly stats
export const getWeeklyStats = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;
    const startDateStr = req.params.startDate;
    const endDateStr = req.params.endDate;
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    // Set time to start/end of day
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    // Get stats for the date range
    const stats = await prisma.dailyStats.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    // Calculate weekly averages and totals
    const weekStats = {
      days: stats,
      averages: {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      },
      totals: {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      },
      goals: {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      },
    };

    if (stats.length > 0) {
      // Calculate totals
      stats.forEach((day: { calories: number; protein: number; carbs: number; fat: number }) => {
        weekStats.totals.calories += day.calories;
        weekStats.totals.protein += day.protein;
        weekStats.totals.carbs += day.carbs;
        weekStats.totals.fat += day.fat;
        
        // Skip goals calculation since day type doesn't include goals property
      });

      // Calculate averages
      weekStats.averages.calories = weekStats.totals.calories / stats.length;
      weekStats.averages.protein = weekStats.totals.protein / stats.length;
      weekStats.averages.carbs = weekStats.totals.carbs / stats.length;
      weekStats.averages.fat = weekStats.totals.fat / stats.length;

      // Round averages
      weekStats.averages.calories = Math.round(weekStats.averages.calories);
      weekStats.averages.protein = Math.round(weekStats.averages.protein);
      weekStats.averages.carbs = Math.round(weekStats.averages.carbs);
      weekStats.averages.fat = Math.round(weekStats.averages.fat);

      // Calculate average goals
      weekStats.goals.calories = Math.round(weekStats.goals.calories / stats.length);
      weekStats.goals.protein = Math.round(weekStats.goals.protein / stats.length);
      weekStats.goals.carbs = Math.round(weekStats.goals.carbs / stats.length);
      weekStats.goals.fat = Math.round(weekStats.goals.fat / stats.length);
    }

    res.json(weekStats);
  } catch (error) {
    console.error('Get weekly stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update daily stats
export const updateDailyStats = async (req: Request, res: Response) => {
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

    // Validate request body (weight is the only field updatable directly)
    const { weight } = req.body;

    if (weight !== undefined && (typeof weight !== 'number' || weight <= 0)) {
      return res.status(400).json({ message: 'Weight must be a positive number' });
    }

    // Update or create daily stats
    const updatedStats = await prisma.dailyStats.upsert({
      where: {
        userId_date: {
          userId,
          date: startDate,
        },
      },
      update: {
        weight,
      },
      create: {
        userId,
        date: startDate,
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        weight,
        calorieGoal: 2000, // Default values
        proteinGoal: 150,
        carbsGoal: 200,
        fatGoal: 70,
      },
    });

    // If weight was updated, update the user's weight as well
    if (weight !== undefined) {
      await prisma.user.update({
        where: { id: userId },
        data: { weight },
      });
    }

    res.json(updatedStats);
  } catch (error) {
    console.error('Update daily stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user goals
export const getUserGoals = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;

    // Get all user goals
    const goals = await prisma.userGoal.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    res.json(goals);
  } catch (error) {
    console.error('Get user goals error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new user goal
export const createUserGoal = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;

    // Validate request body
    const validatedData = userGoalSchema.parse(req.body);
    const endDate = new Date(validatedData.endDate);

    // Mark any active goals as inactive
    await prisma.userGoal.updateMany({
      where: {
        userId,
        achieved: false,
        endDate: {
          gte: new Date(),
        },
      },
      data: {
        achieved: true,
      },
    });

    // Create new goal
    const newGoal = await prisma.userGoal.create({
      data: {
        userId,
        startWeight: validatedData.startWeight,
        targetWeight: validatedData.targetWeight,
        endDate,
      },
    });

    res.status(201).json(newGoal);
  } catch (error) {
    console.error('Create user goal error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a user goal
export const updateUserGoal = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;
    const goalId = parseInt(req.params.id);

    if (isNaN(goalId)) {
      return res.status(400).json({ message: 'Invalid goal ID' });
    }

    // Validate request body
    const validatedData = updateUserGoalSchema.parse(req.body);
    
    // Check if goal exists and belongs to user
    const existingGoal = await prisma.userGoal.findUnique({
      where: { id: goalId },
    });

    if (!existingGoal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    if (existingGoal.userId !== userId) {
      return res.status(403).json({ message: 'Not authorized to update this goal' });
    }

    // Prepare update data
    const updateData: any = {};
    if (validatedData.startWeight !== undefined) updateData.startWeight = validatedData.startWeight;
    if (validatedData.targetWeight !== undefined) updateData.targetWeight = validatedData.targetWeight;
    if (validatedData.endDate !== undefined) updateData.endDate = new Date(validatedData.endDate);
    if (validatedData.achieved !== undefined) updateData.achieved = validatedData.achieved;

    // Update goal
    const updatedGoal = await prisma.userGoal.update({
      where: { id: goalId },
      data: updateData,
    });

    res.json(updatedGoal);
  } catch (error) {
    console.error('Update user goal error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error' });
  }
}; 