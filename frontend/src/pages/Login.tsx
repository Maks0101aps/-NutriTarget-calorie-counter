import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error, clearError } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      // Error is handled in the store
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Welcome Back
      </h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 flex items-center" role="alert">
          <FiAlertCircle className="mr-2" />
          <span>{error}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pl-10 w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Your password"
            />
          </div>
        </div>
        
        <div className="mb-6 text-right">
          <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
            Forgot your password?
          </Link>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-primary-600 text-white py-3 rounded-md font-semibold transition duration-300 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700'
          }`}
        >
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary-600 hover:text-primary-700 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login; 