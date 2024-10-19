
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import smallLogo from '../images/z.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar-container ${isOpen ? 'menu-open' : ''}`}>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={smallLogo} alt="Small Logo" className="small-logo" />
        </div>

        {/* Hamburger icon */}
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>

        {/* Navigation links */}
        <div className={`navbar-right ${isOpen ? 'active' : ''}`}>
          <a href="#aboutus" className="nav-link">About Us</a>
          <a href="#events" className="nav-link">Events</a>
          <Link to="/coordinator-form" className="nav-link" id="ind">Coordinator Forms</Link>
        </div>
      </nav>
      
      {/* Overlay for background blur */}
      <div className={`overlay ${isOpen ? 'active' : ''}`}></div>
    </div>

  );
}

export default Navbar;
