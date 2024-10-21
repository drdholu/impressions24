import React, { useState, useEffect } from 'react';
import Events from './Events';
import AboutUs from './AboutUs';
import Memories from './Memories';
// import vid from '../images/fire3.3gp';
import logo from '../images/Logos/Name Logo filled.png';
import canvas from '../images/background.webp'

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateTransform = (intensity = 1) => {
    const { x, y } = mousePosition;
    const offsetX = (x / window.innerWidth - 0.5) * 10 * intensity;
    const offsetY = (y / window.innerHeight - 0.5) * 10 * intensity;
    return `translate(${offsetX}px, ${offsetY}px)`;
  };

  return (
    <div>
      <div className="relative flex items-center justify-center h-[90vh]">
        {/* <video autoPlay loop muted src={vid} className="w-full h-full object-cover z-[-1]"></video> */}
        <img src={canvas} alt="" className='w-full h-full object-cover z-[-1] brightness-50'/>
        <div className="absolute flex flex-col items-center justify-center w-3/5 opacity-100">
          {/* <div className="absolute" style={{ transform: 'scale(1)' }}>
            <img
              src={logo}
              alt="Background Fest Logo"
              className="w-full opacity-50"
              style={{ transform: calculateTransform(0.5) }} 
            />
          </div> */}
          <img
            src={logo}
            alt="Foreground Fest Logo"
            className="relative w-full"
            style={{ transform: calculateTransform(0.45) }}
          />
          <div className="relative text-sm text-white text-shadow-md">
            BY THE ARTIST, FOR THE ARTIST
          </div>
        </div>
      </div>
      <AboutUs />
      <Events />
      <Memories />
    </div>
  );
};

export default LandingPage;