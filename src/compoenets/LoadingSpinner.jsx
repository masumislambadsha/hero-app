import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="relative mb-8">
        <div className="w-24 h-24 border-8 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-purple-600 animate-pulse"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-700 mb-2">
        Loading Apps
      </h3>
      <p className="text-gray-500 animate-pulse">
        Please wait while we fetch the best apps for you...
      </p>
      <div className="flex space-x-2 mt-6">
        <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
