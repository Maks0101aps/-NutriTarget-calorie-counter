import express, { Request, Response } from 'express';
import { authenticate } from '../middlewares/auth';
import * as mealController from '../controllers/meal';

const router = express.Router();

// Get all meals for current user
// @ts-ignore - Suppress Express 5 type issue
router.get('/', authenticate, (req: Request, res: Response) => {
  mealController.getMealsByDate(req, res);
});

// Get meal by ID
// @ts-ignore - Suppress Express 5 type issue
router.get('/:id', authenticate, (req: Request, res: Response) => {
  mealController.getMealById(req, res);
});

// Create new meal
// @ts-ignore - Suppress Express 5 type issue
router.post('/', authenticate, (req: Request, res: Response) => {
  mealController.createMeal(req, res);
});

// Update meal
// @ts-ignore - Suppress Express 5 type issue
router.put('/:id', authenticate, (req: Request, res: Response) => {
  mealController.updateMeal(req, res);
});

// Delete meal
// @ts-ignore - Suppress Express 5 type issue
router.delete('/:id', authenticate, (req: Request, res: Response) => {
  mealController.deleteMeal(req, res);
});

// Add food to meal
// @ts-ignore - Suppress Express 5 type issue
router.post('/:mealId/foods', authenticate, (req: Request, res: Response) => {
  // mealController.addFoodToMeal(req, res); - Not implemented yet
  res.status(501).json({ message: 'Not implemented yet' });
});

// Remove food from meal
// @ts-ignore - Suppress Express 5 type issue
router.delete('/:mealId/foods/:foodId', authenticate, (req: Request, res: Response) => {
  // mealController.removeFoodFromMeal(req, res); - Not implemented yet
  res.status(501).json({ message: 'Not implemented yet' });
});

export default router; 