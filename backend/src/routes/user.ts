import express, { Request, Response } from 'express';
import { authenticate } from '../middlewares/auth';
import * as userController from '../controllers/user';

const router = express.Router();

// Get current user profile
// @ts-ignore - Suppress Express 5 type issue
router.get('/profile', authenticate, (req: Request, res: Response) => {
  userController.getUserProfile(req, res);
});

// Update user profile
// @ts-ignore - Suppress Express 5 type issue
router.put('/profile', authenticate, (req: Request, res: Response) => {
  userController.updateUserProfile(req, res);
});

// The following endpoints have not been implemented in controllers yet
// Returning 501 Not Implemented for now

// Set user goals
// @ts-ignore - Suppress Express 5 type issue
router.post('/goals', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Get user goals
// @ts-ignore - Suppress Express 5 type issue
router.get('/goals', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Update user password
// @ts-ignore - Suppress Express 5 type issue
router.put('/password', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Add weight tracking entry
// @ts-ignore - Suppress Express 5 type issue
router.post('/weight', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Get weight tracking history
// @ts-ignore - Suppress Express 5 type issue
router.get('/weight', authenticate, (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

export default router; 