import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ImpressionsFootLogo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav className="z-50 w-full px-4 py-2 text-white bg-gray-800 flex flex-row items-center justify-between  h-[10vh]">
        <Link to="/" className='hover:text-gray-400'>
          {/* <img src={ImpressionsFootLogo} className='w-24' alt="impressions_foot_logo" /> */}
          Impressions 24
        </Link>
        <div className="flex space-x-4">
          {/* <a href="#about" className="hover:text-gray-400">About</a> */}
          <Link to="/coordinator-form" className="hover:text-gray-400">Coordinator Forms</Link>
        </div>
    </nav>
  );
};

export default React.memo(Navbar);