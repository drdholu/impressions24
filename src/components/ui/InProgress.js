import React, { startTransition } from 'react';
import { useNavigate } from 'react-router-dom';

const InProgress = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        startTransition(() => {
            navigate('/');
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="mb-4 text-4xl font-bold">This page is still under progress</h1>
            <button
                onClick={goToHomePage}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
            >
                Go to Home Page
            </button>
        </div>
    );
};

export default InProgress;