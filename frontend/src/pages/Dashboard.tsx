import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../store/authStore';

interface NutritionSummary {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [summary, setSummary] = useState<NutritionSummary>({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  });
  const [loading, setLoading] = useState(true);
  
  // Mock data for demonstration
  const dailyGoals = {
    calories: 2000,
    protein: 150,
    carbs: 200,
    fat: 65
  };
  
  useEffect(() => {
    // In a real app, you would fetch this data from your API
    const fetchData = async () => {
      try {
        // Mocking API request delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data - would come from API in real application
        setSummary({
          calories: 1240,
          protein: 85,
          carbs: 120,
          fat: 45
        });
      } catch (error) {
        console.error('Error fetching nutrition data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const calculatePercentage = (value: number, goal: number) => {
    return Math.min(Math.round((value / goal) * 100), 100);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Loading your dashboard...</div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.name || 'User'}!</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Today's Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Calories */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700">Calories</h3>
            <div className="flex justify-between items-end mt-2">
              <span className="text-2xl font-bold">{summary.calories}</span>
              <span className="text-sm text-gray-500">of {dailyGoals.calories}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${calculatePercentage(summary.calories, dailyGoals.calories)}%` }}
              ></div>
            </div>
          </div>
          
          {/* Protein */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700">Protein</h3>
            <div className="flex justify-between items-end mt-2">
              <span className="text-2xl font-bold">{summary.protein}g</span>
              <span className="text-sm text-gray-500">of {dailyGoals.protein}g</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-green-500 h-2.5 rounded-full" 
                style={{ width: `${calculatePercentage(summary.protein, dailyGoals.protein)}%` }}
              ></div>
            </div>
          </div>
          
          {/* Carbs */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700">Carbs</h3>
            <div className="flex justify-between items-end mt-2">
              <span className="text-2xl font-bold">{summary.carbs}g</span>
              <span className="text-sm text-gray-500">of {dailyGoals.carbs}g</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-yellow-500 h-2.5 rounded-full" 
                style={{ width: `${calculatePercentage(summary.carbs, dailyGoals.carbs)}%` }}
              ></div>
            </div>
          </div>
          
          {/* Fat */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700">Fat</h3>
            <div className="flex justify-between items-end mt-2">
              <span className="text-2xl font-bold">{summary.fat}g</span>
              <span className="text-sm text-gray-500">of {dailyGoals.fat}g</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-purple-500 h-2.5 rounded-full" 
                style={{ width: `${calculatePercentage(summary.fat, dailyGoals.fat)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Meals</h2>
          <p className="text-gray-500">No meals recorded today. Add your first meal!</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Add Meal
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
          <p className="text-gray-500">Track your progress over time with our charts and analytics.</p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 