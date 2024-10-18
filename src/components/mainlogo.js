import React from 'react';
import './mainlogo.css';
import festLogo from '../images/logo.png';

const Mainlogo=()=> {
  return (
    <div className="hero-section">
      <div className="overlay">
        <img src={festLogo} alt="Fest Logo" className="fest-logo" />
      </div>
    </div>
  );
}

export default Mainlogo;
