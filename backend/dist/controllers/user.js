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
exports.updateUserProfile = exports.getUserProfile = void 0;
const zod_1 = require("zod");
const index_1 = require("../index");
const nutrition_1 = require("../utils/nutrition");
// Validation schema
const updateProfileSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    age: zod_1.z.number().optional(),
    gender: zod_1.z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
    weight: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    activityLevel: zod_1.z.enum(['SEDENTARY', 'LIGHTLY_ACTIVE', 'MODERATELY_ACTIVE', 'VERY_ACTIVE', 'EXTRA_ACTIVE']).optional(),
    goal: zod_1.z.enum(['LOSE_WEIGHT', 'MAINTAIN_WEIGHT', 'GAIN_WEIGHT']).optional(),
});
// Get user profile
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const userId = req.user.id;
        // Fetch user data
        const user = yield index_1.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                age: true,
                gender: true,
                weight: true,
                height: true,
                activityLevel: true,
                goal: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Calculate nutrition targets if user has complete data
        let nutritionTargets = {
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0
        };
        if (user.age && user.gender && user.weight && user.height && user.activityLevel && user.goal) {
            const bmr = (0, nutrition_1.calculateBMR)(user.gender, user.weight, user.height, user.age);
            const tdee = (0, nutrition_1.calculateTDEE)(bmr, user.activityLevel);
            nutritionTargets = (0, nutrition_1.calculateMacros)(tdee, user.goal);
        }
        res.json({
            user,
            nutritionTargets,
        });
    }
    catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getUserProfile = getUserProfile;
// Update user profile
const updateUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const userId = req.user.id;
        // Validate request body
        const validatedData = updateProfileSchema.parse(req.body);
        // Update user
        const updatedUser = yield index_1.prisma.user.update({
            where: { id: userId },
            data: validatedData,
            select: {
                id: true,
                email: true,
                name: true,
                age: true,
                gender: true,
                weight: true,
                height: true,
                activityLevel: true,
                goal: true,
                updatedAt: true,
            },
        });
        // Initialize nutritionTargets with default values
        let nutritionTargets = {
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0
        };
        // Calculate nutrition targets if user has complete data
        if (updatedUser.age && updatedUser.gender && updatedUser.weight && updatedUser.height && updatedUser.activityLevel && updatedUser.goal) {
            const bmr = (0, nutrition_1.calculateBMR)(updatedUser.gender, updatedUser.weight, updatedUser.height, updatedUser.age);
            const tdee = (0, nutrition_1.calculateTDEE)(bmr, updatedUser.activityLevel);
            nutritionTargets = (0, nutrition_1.calculateMacros)(tdee, updatedUser.goal);
            // Update or create daily stats for today
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            yield index_1.prisma.dailyStats.upsert({
                where: {
                    userId_date: {
                        userId,
                        date: today,
                    },
                },
                update: {
                    calorieGoal: nutritionTargets.calories,
                    proteinGoal: nutritionTargets.protein,
                    carbsGoal: nutritionTargets.carbs,
                    fatGoal: nutritionTargets.fat,
                },
                create: {
                    userId,
                    date: today,
                    calories: 0,
                    protein: 0,
                    carbs: 0,
                    fat: 0,
                    calorieGoal: nutritionTargets.calories,
                    proteinGoal: nutritionTargets.protein,
                    carbsGoal: nutritionTargets.carbs,
                    fatGoal: nutritionTargets.fat,
                },
            });
        }
        res.json({
            user: updatedUser,
            nutritionTargets,
        });
    }
    catch (error) {
        console.error('Update profile error:', error);
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({ message: 'Server error' });
    }
});
exports.updateUserProfile = updateUserProfile;
//# sourceMappingURL=user.js.map