"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMeal = exports.updateMeal = exports.createMeal = exports.getMealById = exports.getMealsByDate = void 0;
const zod_1 = require("zod");
const index_1 = require("../index");
// Validation schemas
const mealItemSchema = zod_1.z.object({
    foodItemId: zod_1.z.number().int().positive(),
    quantity: zod_1.z.number().positive(),
});
const createMealSchema = zod_1.z.object({
    type: zod_1.z.enum(['BREAKFAST', 'LUNCH', 'DINNER', 'SNACK']),
    date: zod_1.z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
    }),
    mealItems: zod_1.z.array(mealItemSchema).min(1),
});
const updateMealSchema = zod_1.z.object({
    type: zod_1.z.enum(['BREAKFAST', 'LUNCH', 'DINNER', 'SNACK']).optional(),
    date: zod_1.z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
    }).optional(),
    mealItems: zod_1.z.array(mealItemSchema).min(1).optional(),
});
// Get meals by date
const getMealsByDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const meals = yield index_1.prisma.meal.findMany({
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
        const mealsWithTotals = meals.map((meal) => {
            const mealTotals = {
                calories: 0,
                protein: 0,
                carbs: 0,
                fat: 0,
            };
            meal.mealItems.forEach((item) => {
                const { foodItem, quantity } = item;
                const ratio = quantity / foodItem.servingSize;
                mealTotals.calories += foodItem.calories * ratio;
                mealTotals.protein += foodItem.protein * ratio;
                mealTotals.carbs += foodItem.carbs * ratio;
                mealTotals.fat += foodItem.fat * ratio;
            });
            return Object.assign(Object.assign({}, meal), { totals: mealTotals });
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
        yield index_1.prisma.dailyStats.upsert({
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
    }
    catch (error) {
        console.error('Get meals by date error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getMealsByDate = getMealsByDate;
// Get a single meal
const getMealById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const userId = req.user.id;
        const mealId = parseInt(req.params.id);
        if (isNaN(mealId)) {
            return res.status(400).json({ message: 'Invalid meal ID' });
        }
        const meal = yield index_1.prisma.meal.findUnique({
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
        res.json(Object.assign(Object.assign({}, meal), { totals }));
    }
    catch (error) {
        console.error('Get meal error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getMealById = getMealById;
// Create a new meal
const createMeal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const foodItems = yield index_1.prisma.foodItem.findMany({
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
        const meal = yield index_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Create meal
            const newMeal = yield tx.meal.create({
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
        }));
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
        const dailyStats = yield index_1.prisma.dailyStats.findUnique({
            where: {
                userId_date: {
                    userId,
                    date: startDate,
                },
            },
        });
        if (dailyStats) {
            // Update existing stats
            yield index_1.prisma.dailyStats.update({
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
        }
        else {
            // Create new stats
            yield index_1.prisma.dailyStats.create({
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
        res.status(201).json(Object.assign(Object.assign({}, meal), { totals }));
    }
    catch (error) {
        console.error('Create meal error:', error);
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({ message: 'Server error' });
    }
});
exports.createMeal = createMeal;
// Update a meal
const updateMeal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const existingMeal = yield index_1.prisma.meal.findUnique({
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
            const foodItems = yield index_1.prisma.foodItem.findMany({
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
        existingMeal.mealItems.forEach((item) => {
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
        const updatedMeal = yield index_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Delete existing meal items if new ones are provided
            if (validatedData.mealItems) {
                yield tx.mealItem.deleteMany({
                    where: {
                        mealId,
                    },
                });
                // Create new meal items
                for (const item of validatedData.mealItems) {
                    yield tx.mealItem.create({
                        data: {
                            mealId,
                            foodItemId: item.foodItemId,
                            quantity: item.quantity,
                        },
                    });
                }
            }
            // Update meal
            const updateData = {};
            if (validatedData.type)
                updateData.type = validatedData.type;
            if (validatedData.date)
                updateData.date = mealDate;
            const updated = yield tx.meal.update({
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
        }));
        // Calculate new meal totals
        const newTotals = {
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
        };
        updatedMeal.mealItems.forEach((item) => {
            const { foodItem, quantity } = item;
            const ratio = quantity / foodItem.servingSize;
            newTotals.calories += foodItem.calories * ratio;
            newTotals.protein += foodItem.protein * ratio;
            newTotals.carbs += foodItem.carbs * ratio;
            newTotals.fat += foodItem.fat * ratio;
        });
        // Update daily stats
        const dailyStats = yield index_1.prisma.dailyStats.findUnique({
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
            yield index_1.prisma.dailyStats.update({
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
        res.json(Object.assign(Object.assign({}, updatedMeal), { totals: newTotals }));
    }
    catch (error) {
        console.error('Update meal error:', error);
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({ message: 'Server error' });
    }
});
exports.updateMeal = updateMeal;
// Delete a meal
const deleteMeal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const existingMeal = yield index_1.prisma.meal.findUnique({
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
        existingMeal.mealItems.forEach((item) => {
            const { foodItem, quantity } = item;
            const ratio = quantity / foodItem.servingSize;
            totals.calories += foodItem.calories * ratio;
            totals.protein += foodItem.protein * ratio;
            totals.carbs += foodItem.carbs * ratio;
            totals.fat += foodItem.fat * ratio;
        });
        // Delete meal and update stats in a transaction
        yield index_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Delete meal (will cascade delete meal items)
            yield tx.meal.delete({
                where: {
                    id: mealId,
                },
            });
            // Get date from meal for daily stats
            const mealDate = new Date(existingMeal.date);
            const startDate = new Date(mealDate);
            startDate.setHours(0, 0, 0, 0);
            // Update daily stats
            const dailyStats = yield tx.dailyStats.findUnique({
                where: {
                    userId_date: {
                        userId,
                        date: startDate,
                    },
                },
            });
            if (dailyStats) {
                yield tx.dailyStats.update({
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
        }));
        res.json({ message: 'Meal deleted successfully' });
    }
    catch (error) {
        console.error('Delete meal error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.deleteMeal = deleteMeal;
// Calculate meal totals
const calculateMealTotals = (mealItems) => {
    return mealItems.reduce((totals, item) => {
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
//# sourceMappingURL=meal.js.map