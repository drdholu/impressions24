// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
import smallLogo from '../images/z.png';

const Navbar=() =>{
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={smallLogo} alt="Small Logo" className="small-logo" />
      </div>
      <div className="navbar-right">
        <a href="#aboutus" className="nav-link">About Us</a>
        <a href="#events" className="nav-link">Events</a>
        <Link to="/coordinator-form" className="nav-link" id='ind'>Coordinator Forms</Link>
      </div>
    </nav>
  );
}

// export default Navbar;


// const Navbar = () => {
//   return (
//     <nav className="z-50 w-full px-4 py-2 text-white bg-gray-800">
//       <div className="flex items-center justify-between">
//         <div className="text-xl font-bold">Logo</div>
//         <div className="flex space-x-4">
//           {/* <a href="#about" className="hover:text-gray-400">About</a> */}
//           <Link to="/coordinator-form" className="hover:text-gray-400">Coordinator Forms</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Navbar;