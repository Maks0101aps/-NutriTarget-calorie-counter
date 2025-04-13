import express, { Request, Response } from 'express';
import { authenticate } from '../middlewares/auth';
import * as foodController from '../controllers/food';

const router = express.Router();

// Get all foods
// @ts-ignore - Suppress Express 5 type issue
router.get('/', authenticate, (req: Request, res: Response) => {
  foodController.getAllFoodItems(req, res);
});

// Search food items - This needs to come before '/:id' route to prevent conflict
// @ts-ignore - Suppress Express 5 type issue
router.get('/search', authenticate, (req: Request, res: Response) => {
  foodController.searchFoodItems(req, res);
});

// Get food by ID
// @ts-ignore - Suppress Express 5 type issue
router.get('/:id', authenticate, (req: Request, res: Response) => {
  foodController.getFoodItemById(req, res);
});

// Create new food
// @ts-ignore - Suppress Express 5 type issue
router.post('/', authenticate, (req: Request, res: Response) => {
  foodController.createFoodItem(req, res);
});

// Update food
// @ts-ignore - Suppress Express 5 type issue
router.put('/:id', authenticate, (req: Request, res: Response) => {
  foodController.updateFoodItem(req, res);
});

// Delete food
// @ts-ignore - Suppress Express 5 type issue
router.delete('/:id', authenticate, (req: Request, res: Response) => {
  foodController.deleteFoodItem(req, res);
});

export default router; 