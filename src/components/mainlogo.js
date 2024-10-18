import React from 'react';
import './mainlogo.css';
import festLogo from '../images/logo.png';
import vid from '../images/fire3.mp4'
const Mainlogo =()=> {
  return (
    <div className="hero-section">
        <video autoPlay loop muted src={vid}>
        </video>
        <div className="overlay">
            <img src={festLogo} alt="Fest Logo" className="fest-logo" />
            <div className="sub-txt">BY THE ARTIST,FOR THE ARTIST</div>
        </div>
    </div>
  );
}

export default Mainlogo;
