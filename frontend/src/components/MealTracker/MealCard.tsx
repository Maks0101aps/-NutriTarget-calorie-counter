import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface FoodItem {
  id: number;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  servingSize: number;
  servingUnit: string;
}

interface MealItem {
  id: number;
  foodItem: FoodItem;
  quantity: number;
}

interface Meal {
  id: number;
  type: 'BREAKFAST' | 'LUNCH' | 'DINNER' | 'SNACK';
  date: string;
  mealItems: MealItem[];
  totals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

interface MealCardProps {
  meal: Meal;
  onEdit: (mealId: number) => void;
  onDelete: (mealId: number) => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onEdit, onDelete }) => {
  const mealTypeLabels = {
    BREAKFAST: 'Breakfast',
    LUNCH: 'Lunch',
    DINNER: 'Dinner',
    SNACK: 'Snack',
  };

  const mealTypeColors = {
    BREAKFAST: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    LUNCH: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    DINNER: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    SNACK: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`px-2 py-1 rounded-md text-sm font-medium ${mealTypeColors[meal.type]}`}>
            {mealTypeLabels[meal.type]}
          </span>
          <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">
            {new Date(meal.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => onEdit(meal.id)}
            className="p-1 rounded-md text-gray-500 hover:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiEdit2 size={18} />
          </button>
          <button 
            onClick={() => onDelete(meal.id)}
            className="p-1 rounded-md text-gray-500 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        {meal.mealItems.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 italic">No items added</p>
        ) : (
          <div className="space-y-3">
            {meal.mealItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white">{item.foodItem.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.quantity} {item.foodItem.servingUnit}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {Math.round((item.foodItem.calories * item.quantity) / item.foodItem.servingSize)} cal
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    P: {Math.round((item.foodItem.protein * item.quantity) / item.foodItem.servingSize)}g 
                    &nbsp;|&nbsp; 
                    C: {Math.round((item.foodItem.carbs * item.quantity) / item.foodItem.servingSize)}g 
                    &nbsp;|&nbsp; 
                    F: {Math.round((item.foodItem.fat * item.quantity) / item.foodItem.servingSize)}g
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Meal Totals</p>
          </div>
          <div className="text-right">
            <p className="text-gray-900 dark:text-white font-semibold">
              {Math.round(meal.totals.calories)} calories
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              P: {Math.round(meal.totals.protein)}g 
              &nbsp;|&nbsp; 
              C: {Math.round(meal.totals.carbs)}g 
              &nbsp;|&nbsp; 
              F: {Math.round(meal.totals.fat)}g
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard; 