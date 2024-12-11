import React, { startTransition } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    startTransition(() => {
        navigate('/');
    });
};
  return (
    <div className="z-100 flex flex-col items-center justify-center h-[90vh]">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2">Sorry, the page you are looking for does not exist.</p>
      <button onClick={goToHomePage} className="px-4 py-2 mt-6 bg-blue-600 rounded hover:bg-blue-700">
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;