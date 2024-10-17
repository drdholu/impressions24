import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="z-50 w-full px-4 py-2 text-white bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex space-x-4">
          {/* <a href="#about" className="hover:text-gray-400">About</a> */}
          <Link to="/coordinator-form" className="hover:text-gray-400">Coordinator Forms</Link>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);