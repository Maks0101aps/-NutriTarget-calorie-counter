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
exports.deleteFoodItem = exports.updateFoodItem = exports.createFoodItem = exports.searchFoodItems = exports.getFoodItemById = exports.getAllFoodItems = void 0;
const zod_1 = require("zod");
const index_1 = require("../index");
// Validation schema
const foodItemSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    calories: zod_1.z.number().positive(),
    protein: zod_1.z.number().nonnegative(),
    carbs: zod_1.z.number().nonnegative(),
    fat: zod_1.z.number().nonnegative(),
    servingSize: zod_1.z.number().positive(),
    servingUnit: zod_1.z.string().min(1),
});
// Get all food items (paginated)
const getAllFoodItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const skip = (page - 1) * limit;
        const foodItems = yield index_1.prisma.foodItem.findMany({
            skip,
            take: limit,
            orderBy: { name: 'asc' },
        });
        const total = yield index_1.prisma.foodItem.count();
        res.json({
            foodItems,
            pagination: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit),
            },
        });
    }
    catch (error) {
        console.error('Get food items error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getAllFoodItems = getAllFoodItems;
// Get a food item by ID
const getFoodItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }
        const foodItem = yield index_1.prisma.foodItem.findUnique({
            where: { id },
        });
        if (!foodItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.json(foodItem);
    }
    catch (error) {
        console.error('Get food item error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getFoodItemById = getFoodItemById;
// Search for food items
const searchFoodItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = String(req.query.q || '');
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const skip = (page - 1) * limit;
        if (!query) {
            return res.status(400).json({ message: 'Search query is required' });
        }
        const foodItems = yield index_1.prisma.foodItem.findMany({
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
        const total = yield index_1.prisma.foodItem.count({
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
    }
    catch (error) {
        console.error('Search food items error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.searchFoodItems = searchFoodItems;
// Create a new food item
const createFoodItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body
        const validatedData = foodItemSchema.parse(req.body);
        // Create food item
        const foodItem = yield index_1.prisma.foodItem.create({
            data: validatedData,
        });
        res.status(201).json(foodItem);
    }
    catch (error) {
        console.error('Create food item error:', error);
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({ message: 'Server error' });
    }
});
exports.createFoodItem = createFoodItem;
// Update a food item
const updateFoodItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }
        // Validate request body
        const validatedData = foodItemSchema.parse(req.body);
        // Check if food item exists
        const existingItem = yield index_1.prisma.foodItem.findUnique({
            where: { id },
        });
        if (!existingItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        // Update food item
        const updatedItem = yield index_1.prisma.foodItem.update({
            where: { id },
            data: validatedData,
        });
        res.json(updatedItem);
    }
    catch (error) {
        console.error('Update food item error:', error);
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({ message: 'Server error' });
    }
});
exports.updateFoodItem = updateFoodItem;
// Delete a food item
const deleteFoodItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }
        // Check if food item exists
        const existingItem = yield index_1.prisma.foodItem.findUnique({
            where: { id },
        });
        if (!existingItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        // Delete food item
        yield index_1.prisma.foodItem.delete({
            where: { id },
        });
        res.status(204).send();
    }
    catch (error) {
        console.error('Delete food item error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.deleteFoodItem = deleteFoodItem;
//# sourceMappingURL=food.js.map