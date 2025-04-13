import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';

interface ProfileFormData {
  name: string;
  email: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  activityLevel: string;
  goal: string;
}

const Profile: React.FC = () => {
  const { user, updateUser } = useAuthStore();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  // Initial form data
  const [formData, setFormData] = useState<ProfileFormData>({
    name: user?.name || '',
    email: user?.email || '',
    age: user?.age?.toString() || '',
    gender: user?.gender || 'male',
    height: user?.height?.toString() || '',
    weight: user?.weight?.toString() || '',
    activityLevel: user?.activityLevel || 'moderate',
    goal: user?.goal || 'maintain'
  });
  
  const activityLevels = [
    { value: 'sedentary', label: 'Sedentary (little or no exercise)' },
    { value: 'light', label: 'Lightly active (light exercise 1-3 days/week)' },
    { value: 'moderate', label: 'Moderately active (moderate exercise 3-5 days/week)' },
    { value: 'active', label: 'Active (hard exercise 6-7 days/week)' },
    { value: 'very_active', label: 'Very active (very hard exercise & physical job)' }
  ];
  
  const goals = [
    { value: 'lose', label: 'Lose weight' },
    { value: 'maintain', label: 'Maintain weight' },
    { value: 'gain', label: 'Gain weight' }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    if (!user || !user.id || !user.email) {
      setMessage({
        type: 'error',
        text: 'User information is incomplete. Please log in again.'
      });
      setLoading(false);
      return;
    }
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // In a real app, this would be an API call
      // Mock update
      const updatedUser = {
        id: user.id,
        email: user.email,
        name: formData.name,
        age: parseInt(formData.age) || undefined,
        gender: formData.gender,
        height: parseInt(formData.height) || undefined,
        weight: parseFloat(formData.weight) || undefined,
        activityLevel: formData.activityLevel,
        goal: formData.goal
      };
      
      // Update the store with updated user data
      updateUser(updatedUser);
      
      setMessage({
        type: 'success',
        text: 'Profile updated successfully!'
      });
      setEditing(false);
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to update profile. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      
      {message.text && (
        <div className={`mb-4 p-4 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <button
              className={`px-4 py-2 rounded-md ${editing ? 'bg-gray-300 hover:bg-gray-400 text-gray-800' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              onClick={() => setEditing(!editing)}
              disabled={loading}
            >
              {editing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
          
          {editing ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                    disabled
                  />
                  <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="12"
                    max="120"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="50"
                    max="250"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="20"
                    max="300"
                    step="0.1"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Activity Level</label>
                  <select
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {activityLevels.map(level => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Goal</label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {goals.map(goal => (
                      <option key={goal.value} value={goal.value}>{goal.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="mt-1 text-lg">{user?.name || 'Not set'}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="mt-1 text-lg">{user?.email}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Age</h3>
                <p className="mt-1 text-lg">{user?.age || 'Not set'}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                <p className="mt-1 text-lg capitalize">{user?.gender || 'Not set'}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Height</h3>
                <p className="mt-1 text-lg">{user?.height ? `${user.height} cm` : 'Not set'}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Weight</h3>
                <p className="mt-1 text-lg">{user?.weight ? `${user.weight} kg` : 'Not set'}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Activity Level</h3>
                <p className="mt-1 text-lg">
                  {activityLevels.find(level => level.value === user?.activityLevel)?.label || 'Not set'}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Goal</h3>
                <p className="mt-1 text-lg">
                  {goals.find(g => g.value === user?.goal)?.label || 'Not set'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        
        <div className="space-y-4">
          <button className="text-blue-500 hover:text-blue-700 font-medium">
            Change Password
          </button>
          
          <button className="text-red-500 hover:text-red-700 font-medium">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 