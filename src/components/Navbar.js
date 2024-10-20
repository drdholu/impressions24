import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import smallLogo from '../images/z.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-10 text-white bg-black">
      <div className="h-[10vh] flex items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={smallLogo} alt="Logo" className="w-auto h-20" />
          <span className="text-xl font-semibold">Impressions 24</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/coordinator-form" className="text-white no-underline hover:underline">
            Coordinator Forms
          </Link>
          {/* <Link to="/volunteer-form" className="text-white no-underline hover:underline">
            Volunteer Forms
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-3xl md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden bg-black flex-col w-full absolute`}>
        <div className="px-5 py-4 space-y-4">
          <Link
            to="/coordinator-form"
            className="block text-white no-underline hover:underline"
            onClick={toggleMenu}
          >
            Coordinator Forms
          </Link>
          <Link
            to="/volunteer-form"
            className="block text-white no-underline hover:underline"
            onClick={toggleMenu}
          >
            Volunteer Forms
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;