import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import smallLogo from '../images/z.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${isOpen ? 'z-50' : 'z-0'}`}>
      <nav className="absolute top-0 w-full h-[20vh] flex justify-between items-center p-5">
        <div className="ml-5">
          <img src={smallLogo} alt="Small Logo" className="h-20" />
        </div>

        {/* Hamburger icon for mobile */}
        <button 
          className="block text-white text-3xl bg-transparent border-none cursor-pointer focus:outline-none md:hidden" 
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        {/* Navigation links - positioned on the right */}
        <div className={`flex md:ml-auto ${isOpen ? 'flex-col absolute top-[20vh] right-0 w-full bg-black' : 'hidden'} md:flex md:flex-row md:items-center md:bg-transparent md:static md:w-auto`}>
          <a href="#aboutus" className="mx-5 my-2 text-white font-bold hover:underline text-center">About Us</a>
          <a href="#events" className="mx-5 my-2 text-white font-bold hover:underline text-center">Events</a>
          <Link to="/coordinator-form" className="mx-5 my-2 text-white font-bold hover:underline text-center">Coordinator Forms</Link>
        </div>
      </nav>

      {/* Overlay for background blur */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'backdrop-blur-md opacity-100' : 'opacity-0'}`}></div>
    </div>
  );
};

export default Navbar;
