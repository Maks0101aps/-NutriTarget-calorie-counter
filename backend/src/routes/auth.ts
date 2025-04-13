import express from 'express';
import { register, login } from '../controllers/auth';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res, next) => {
  try {
    await register(req, res);
  } catch (error) {
    next(error);
  }
});

// Login a user
router.post('/login', async (req, res, next) => {
  try {
    await login(req, res);
  } catch (error) {
    next(error);
  }
});

// Logout a user
router.post('/logout', (req, res) => {
  // Token-based authentication doesn't require server-side logout
  // Client should discard the token
  res.status(200).json({ message: 'Logged out successfully' });
});

export default router; 