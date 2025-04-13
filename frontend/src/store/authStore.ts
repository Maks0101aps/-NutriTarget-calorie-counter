import create from 'zustand';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

interface User {
  id: number;
  email: string;
  name?: string;
  age?: number;
  gender?: string;
  height?: number;
  weight?: number;
  activityLevel?: string;
  goal?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  updateUser: (updatedUser: User) => void;
}

export const useAuthStore = create<AuthState>((set) => {
  // Initialize state from localStorage if available
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  
  return {
    user: userStr ? JSON.parse(userStr) : null,
    token,
    isAuthenticated: !!token,
    isLoading: false,
    error: null,
    
    login: async (email, password) => {
      try {
        set({ isLoading: true, error: null });
        
        const response = await axios.post(`${API_URL}/auth/login`, { 
          email, 
          password 
        });
        
        const { token, user } = response.data;
        
        // Store in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        // Update state
        set({
          user,
          token,
          isAuthenticated: true,
          isLoading: false
        });
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Login failed';
        set({ error: errorMessage, isLoading: false });
      }
    },
    
    register: async (name, email, password) => {
      try {
        set({ isLoading: true, error: null });
        
        const response = await axios.post(`${API_URL}/auth/register`, { 
          name,
          email, 
          password
        });
        
        const { token, user } = response.data;
        
        // Store in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        // Update state
        set({
          user,
          token,
          isAuthenticated: true,
          isLoading: false
        });
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Registration failed';
        set({ error: errorMessage, isLoading: false });
      }
    },
    
    logout: () => {
      // Clear localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Reset state
      set({
        user: null,
        token: null,
        isAuthenticated: false
      });
    },
    
    clearError: () => {
      set({ error: null });
    },
    
    updateUser: (updatedUser) => {
      // Update localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      // Update state
      set({
        user: updatedUser
      });
    }
  };
}); 