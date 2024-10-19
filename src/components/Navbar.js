import React from 'react';
import { Link } from 'react-router-dom';
import smallLogo from '../images/z.png';

const Navbar = () => {
  return (
      <nav className="z-10 sticky top-0 flex items-center justify-between w-full px-5 h-[10vh] bg-black text-white">
        <Link to="/" className='flex flex-row items-center gap-3'>
          <img src={smallLogo} alt="Small Logo" className="h-20" />
          Impressions 24
        </Link>

        <div className="flex items-center gap-5">
          {/* <a href="#about" className="text-white no-underline hover:underline">About Us</a> */}
          {/* <a href="#events" className="text-white no-underline hover:underline">Events</a> */}
          {/* <a href="#memories" className="text-white no-underline hover:underline">Memories</a> */}
          <Link to="/coordinator-form" className="text-white no-underline hover:underline" id="ind">Coordinator Forms</Link>
        </div>
      </nav>
  );
}

export default Navbar;