// Generate a professional Error component that displays an error message and a button to go back to the refresh the component.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

type ErrorProps = {
  message: string;
};

export const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <Button onClick={handleRefresh} variant="primary">
          Refresh
        </Button>
      </div>
    </div>
  );
};