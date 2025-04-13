import React, { useState } from 'react';

interface Food {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  servingSize: string;
  quantity: number;
}

interface Meal {
  id: string;
  name: string;
  time: string;
  foods: Food[];
}

const MealTracker: React.FC = () => {
  // Mock data for demonstration
  const initialMeals: Meal[] = [
    {
      id: '1',
      name: 'Breakfast',
      time: '08:00',
      foods: [
        {
          id: '101',
          name: 'Oatmeal',
          calories: 150,
          protein: 5,
          carbs: 27,
          fat: 2.5,
          servingSize: '1 cup',
          quantity: 1
        },
        {
          id: '102',
          name: 'Banana',
          calories: 105,
          protein: 1.3,
          carbs: 27,
          fat: 0.4,
          servingSize: '1 medium',
          quantity: 1
        }
      ]
    },
    {
      id: '2',
      name: 'Lunch',
      time: '13:00',
      foods: [
        {
          id: '201',
          name: 'Chicken Salad',
          calories: 350,
          protein: 30,
          carbs: 10,
          fat: 20,
          servingSize: '1 bowl',
          quantity: 1
        }
      ]
    }
  ];
  
  const [meals, setMeals] = useState<Meal[]>(initialMeals);
  const [newMealName, setNewMealName] = useState('');
  const [showAddMealForm, setShowAddMealForm] = useState(false);
  
  const calculateTotalNutrition = () => {
    let totals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    };
    
    meals.forEach(meal => {
      meal.foods.forEach(food => {
        totals.calories += food.calories * food.quantity;
        totals.protein += food.protein * food.quantity;
        totals.carbs += food.carbs * food.quantity;
        totals.fat += food.fat * food.quantity;
      });
    });
    
    return totals;
  };
  
  const handleAddMeal = () => {
    if (newMealName.trim() === '') return;
    
    const newMeal: Meal = {
      id: Date.now().toString(),
      name: newMealName,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      foods: []
    };
    
    setMeals([...meals, newMeal]);
    setNewMealName('');
    setShowAddMealForm(false);
  };
  
  const handleRemoveFood = (mealId: string, foodId: string) => {
    const updatedMeals = meals.map(meal => {
      if (meal.id === mealId) {
        return {
          ...meal,
          foods: meal.foods.filter(food => food.id !== foodId)
        };
      }
      return meal;
    });
    
    setMeals(updatedMeals);
  };
  
  const handleRemoveMeal = (mealId: string) => {
    setMeals(meals.filter(meal => meal.id !== mealId));
  };
  
  const totals = calculateTotalNutrition();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Today's Meals</h1>
        <div className="mt-4 md:mt-0">
          <button 
            onClick={() => setShowAddMealForm(!showAddMealForm)}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          >
            {showAddMealForm ? 'Cancel' : 'Add Meal'}
          </button>
        </div>
      </div>
      
      {showAddMealForm && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-3">Add New Meal</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Meal name (e.g., Dinner, Snack)"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newMealName}
              onChange={(e) => setNewMealName(e.target.value)}
            />
            <button
              onClick={handleAddMeal}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Nutrition Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Calories</div>
            <div className="text-2xl font-bold">{totals.calories}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Protein</div>
            <div className="text-2xl font-bold">{totals.protein}g</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Carbs</div>
            <div className="text-2xl font-bold">{totals.carbs}g</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Fat</div>
            <div className="text-2xl font-bold">{totals.fat}g</div>
          </div>
        </div>
      </div>
      
      {meals.length > 0 ? (
        <div className="space-y-6">
          {meals.map(meal => (
            <div key={meal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
                <div>
                  <h3 className="text-lg font-semibold">{meal.name}</h3>
                  <div className="text-sm text-gray-500">{meal.time}</div>
                </div>
                <div className="flex gap-2">
                  <button 
                    className="text-blue-500 hover:text-blue-700 text-sm"
                    onClick={() => console.log('Navigate to food search')} // In a real app, this would navigate to food search
                  >
                    Add Food
                  </button>
                  <button 
                    className="text-red-500 hover:text-red-700 text-sm"
                    onClick={() => handleRemoveMeal(meal.id)}
                  >
                    Delete Meal
                  </button>
                </div>
              </div>
              
              {meal.foods.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Food
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Serving
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Calories
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Protein
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Carbs
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fat
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {meal.foods.map(food => (
                        <tr key={food.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{food.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{food.quantity} × {food.servingSize}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{food.calories * food.quantity}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(food.protein * food.quantity).toFixed(1)}g</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(food.carbs * food.quantity).toFixed(1)}g</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(food.fat * food.quantity).toFixed(1)}g</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => handleRemoveFood(meal.id, food.id)}
                              className="text-red-600 hover:text-red-900 text-sm font-medium"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No foods added to this meal yet. Click "Add Food" to add some.
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500 mb-4">No meals tracked for today. Start by adding your first meal!</p>
          <button 
            onClick={() => setShowAddMealForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Add Your First Meal
          </button>
        </div>
      )}
    </div>
  );
};

export default MealTracker; 