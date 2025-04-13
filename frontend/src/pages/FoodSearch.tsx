import React, { useState } from 'react';

interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  servingSize: string;
}

const FoodSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  
  // Mock data for demonstration
  const mockFoodData: FoodItem[] = [
    {
      id: '1',
      name: 'Chicken Breast',
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      servingSize: '100g'
    },
    {
      id: '2',
      name: 'Brown Rice',
      calories: 112,
      protein: 2.6,
      carbs: 23.5,
      fat: 0.9,
      servingSize: '100g'
    },
    {
      id: '3',
      name: 'Broccoli',
      calories: 34,
      protein: 2.8,
      carbs: 6.6,
      fat: 0.4,
      servingSize: '100g'
    },
    {
      id: '4',
      name: 'Salmon',
      calories: 208,
      protein: 20,
      carbs: 0,
      fat: 13,
      servingSize: '100g'
    },
    {
      id: '5',
      name: 'Sweet Potato',
      calories: 86,
      protein: 1.6,
      carbs: 20,
      fat: 0.1,
      servingSize: '100g'
    }
  ];
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Filter mock data based on search query
      // In a real app, this would be an actual API call
      const results = mockFoodData.filter(food => 
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching for food:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleAddToMeal = (foodItem: FoodItem) => {
    // In a real app, this would add the food item to the user's meal
    console.log('Adding to meal:', foodItem);
    // Show success message or redirect
    alert(`Added ${foodItem.name} to your meal`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Food Search</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search for a food (e.g., chicken, rice, apple)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="text-xl">Searching for foods...</div>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Food
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
                  Serving
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {searchResults.map((food) => (
                <tr key={food.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{food.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{food.calories}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{food.protein}g</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{food.carbs}g</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{food.fat}g</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{food.servingSize}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleAddToMeal(food)}
                      className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                    >
                      Add to Meal
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : searchQuery && (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500">No foods found matching "{searchQuery}". Try another search term.</p>
        </div>
      )}
      
      <div className="mt-8 bg-blue-50 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">Pro Tip</h2>
        <p className="text-blue-700">
          For accurate tracking, make sure to select the correct serving size when adding foods to your meals.
        </p>
      </div>
    </div>
  );
};

export default FoodSearch; 