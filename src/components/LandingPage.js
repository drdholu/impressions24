import React from 'react';
// import Mainlogo from './mainlogo';
// import Navbar from './Navbar';
import Events from './Events';
import AboutUs from './AboutUs';
import Memories from './Memories';
import vid from '../images/fire3.mp4';
import logo from '../images/Logos/Name Logo filled.png'

const LandingPage = () => {

  return (
    <div>
      <div className="relative flex items-center justify-center h-[90vh]">
        <video autoPlay loop muted src={vid} className="w-full h-full object-cover z-[-1]"></video>
        <div className="absolute flex flex-col items-center justify-center w-3/5 opacity-100">
          <img src={logo} alt="Fest Logo" className="w-full animate-fadeInFloat" />
          <div className="text-sm text-white text-shadow-md animate-fadeIn">BY THE ARTIST, FOR THE ARTIST</div>
        </div>
      </div>
      <AboutUs />
      <Events />
      <Memories />
    </div>
  );
};

export default LandingPage;