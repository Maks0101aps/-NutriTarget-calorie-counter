import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { FiMail, FiLock, FiAlertCircle, FiUser } from 'react-icons/fi';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, error, clearError } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError?.();

    if (formData.password !== formData.confirmPassword) {
      // Handle password mismatch error
      return;
    }

    try {
      setLoading(true);
      await register(formData.name, formData.email, formData.password);
      navigate('/dashboard');
    } catch (err: any) {
      // Error is handled in the store
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Create Account
      </h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 flex items-center" role="alert">
          <FiAlertCircle className="mr-2" />
          <span>{error}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="text-gray-400" />
            </div>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="pl-10 w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="John Doe"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="pl-10 w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="you@example.com"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiLock className="text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="pl-10 w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Your password"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiLock className="text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="pl-10 w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Confirm your password"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-primary-600 text-white py-3 rounded-md font-semibold transition duration-300 ${
            loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700'
          }`}
        >
          {loading ? 'Creating Account...' : 'Register'}
        </button>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 hover:text-primary-700 font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register; 