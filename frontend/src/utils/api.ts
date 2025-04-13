import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 responses (unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear storage and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// User API
export const userApi = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data: any) => api.put('/users/profile', data),
};

// Food API
export const foodApi = {
  searchFood: (query: string, page = 1, limit = 20) => 
    api.get(`/food/search?q=${query}&page=${page}&limit=${limit}`),
  getFoodItem: (id: number) => api.get(`/food/${id}`),
  getAllFoodItems: (page = 1, limit = 20) => 
    api.get(`/food?page=${page}&limit=${limit}`),
  createFoodItem: (data: any) => api.post('/food', data),
};

// Meal API
export const mealApi = {
  getMealsByDate: (date: string) => api.get(`/meals/date/${date}`),
  getMeal: (id: number) => api.get(`/meals/${id}`),
  createMeal: (data: any) => api.post('/meals', data),
  updateMeal: (id: number, data: any) => api.put(`/meals/${id}`, data),
  deleteMeal: (id: number) => api.delete(`/meals/${id}`),
};

// Stats API
export const statsApi = {
  getDailyStats: (date: string) => api.get(`/stats/daily/${date}`),
  getWeeklyStats: (startDate: string, endDate: string) => 
    api.get(`/stats/weekly/${startDate}/${endDate}`),
  updateDailyStats: (date: string, data: any) => 
    api.put(`/stats/daily/${date}`, data),
  getUserGoals: () => api.get('/stats/goals'),
  createUserGoal: (data: any) => api.post('/stats/goals', data),
  updateUserGoal: (id: number, data: any) => api.put(`/stats/goals/${id}`, data),
}; 