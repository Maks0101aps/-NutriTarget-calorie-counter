import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="flex items-center text-primary-600 hover:text-primary-700 font-semibold"
      >
        <FiArrowLeft className="mr-2" /> Go back to home
      </Link>
    </div>
  );
};

export default NotFound; 