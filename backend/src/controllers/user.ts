import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../index';
import { calculateBMR, calculateTDEE, calculateMacros } from '../utils/nutrition';

// Validation schema
const updateProfileSchema = z.object({
  name: z.string().optional(),
  age: z.number().optional(),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
  weight: z.number().optional(),
  height: z.number().optional(),
  activityLevel: z.enum(['SEDENTARY', 'LIGHTLY_ACTIVE', 'MODERATELY_ACTIVE', 'VERY_ACTIVE', 'EXTRA_ACTIVE']).optional(),
  goal: z.enum(['LOSE_WEIGHT', 'MAINTAIN_WEIGHT', 'GAIN_WEIGHT']).optional(),
});

// Get user profile
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;

    // Fetch user data
    const user = await prisma.user.findUnique({
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
      const bmr = calculateBMR(user.gender, user.weight, user.height, user.age);
      const tdee = calculateTDEE(bmr, user.activityLevel);
      nutritionTargets = calculateMacros(tdee, user.goal);
    }

    res.json({
      user,
      nutritionTargets,
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user profile
export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;

    // Validate request body
    const validatedData = updateProfileSchema.parse(req.body);

    // Update user
    const updatedUser = await prisma.user.update({
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
      const bmr = calculateBMR(updatedUser.gender, updatedUser.weight, updatedUser.height, updatedUser.age);
      const tdee = calculateTDEE(bmr, updatedUser.activityLevel);
      nutritionTargets = calculateMacros(tdee, updatedUser.goal);

      // Update or create daily stats for today
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      await prisma.dailyStats.upsert({
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
  } catch (error) {
    console.error('Update profile error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error' });
  }
}; 