import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../index';

// Validation schema
const foodItemSchema = z.object({
  name: z.string().min(1),
  calories: z.number().positive(),
  protein: z.number().nonnegative(),
  carbs: z.number().nonnegative(),
  fat: z.number().nonnegative(),
  servingSize: z.number().positive(),
  servingUnit: z.string().min(1),
});

// Get all food items (paginated)
export const getAllFoodItems = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const foodItems = await prisma.foodItem.findMany({
      skip,
      take: limit,
      orderBy: { name: 'asc' },
    });

    const total = await prisma.foodItem.count();

    res.json({
      foodItems,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get food items error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a food item by ID
export const getFoodItemById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }

    const foodItem = await prisma.foodItem.findUnique({
      where: { id },
    });

    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    res.json(foodItem);
  } catch (error) {
    console.error('Get food item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Search for food items
export const searchFoodItems = async (req: Request, res: Response) => {
  try {
    const query = String(req.query.q || '');
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const foodItems = await prisma.foodItem.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
      skip,
      take: limit,
      orderBy: { name: 'asc' },
    });

    const total = await prisma.foodItem.count({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });

    res.json({
      foodItems,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Search food items error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new food item
export const createFoodItem = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = foodItemSchema.parse(req.body);

    // Create food item
    const foodItem = await prisma.foodItem.create({
      data: validatedData,
    });

    res.status(201).json(foodItem);
  } catch (error) {
    console.error('Create food item error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a food item
export const updateFoodItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }

    // Validate request body
    const validatedData = foodItemSchema.parse(req.body);

    // Check if food item exists
    const existingItem = await prisma.foodItem.findUnique({
      where: { id },
    });

    if (!existingItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    // Update food item
    const updatedItem = await prisma.foodItem.update({
      where: { id },
      data: validatedData,
    });

    res.json(updatedItem);
  } catch (error) {
    console.error('Update food item error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a food item
export const deleteFoodItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }

    // Check if food item exists
    const existingItem = await prisma.foodItem.findUnique({
      where: { id },
    });

    if (!existingItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    // Delete food item
    await prisma.foodItem.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Delete food item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}; 