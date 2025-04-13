import express, { Request, Response } from 'express';
import { authenticate } from '../middlewares/auth';
import * as statsController from '../controllers/stats';

const router = express.Router();

// Get user goals
// @ts-ignore - Suppress Express 5 type issue
router.get('/', authenticate, (req: Request, res: Response) => {
  statsController.getUserGoals(req, res);
});

// Get daily stats
// @ts-ignore - Suppress Express 5 type issue
router.get('/daily', authenticate, (req: Request, res: Response) => {
  statsController.getDailyStats(req, res);
});

// Get weekly stats
// @ts-ignore - Suppress Express 5 type issue
router.get('/weekly', authenticate, (req: Request, res: Response) => {
  statsController.getWeeklyStats(req, res);
});

// The following endpoints are not currently implemented in the controller
// Returning 501 Not Implemented for now

// Get monthly stats
// @ts-ignore - Suppress Express 5 type issue
router.get('/monthly', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Get daily calories for current user
// @ts-ignore - Suppress Express 5 type issue
router.get('/daily-calories', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Get weekly calories for current user
// @ts-ignore - Suppress Express 5 type issue
router.get('/weekly-calories', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Get monthly calories for current user
// @ts-ignore - Suppress Express 5 type issue
router.get('/monthly-calories', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Get nutrition breakdown for current user
// @ts-ignore - Suppress Express 5 type issue
router.get('/nutrition-breakdown', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Get nutrition stats by date range
// @ts-ignore - Suppress Express 5 type issue
router.get('/nutrition', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Get calorie intake stats by date range
// @ts-ignore - Suppress Express 5 type issue
router.get('/calories', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Get weight progress stats
// @ts-ignore - Suppress Express 5 type issue
router.get('/weight', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Get progress towards goals
// @ts-ignore - Suppress Express 5 type issue
router.get('/goals', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

export default router; 