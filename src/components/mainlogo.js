import React from 'react';
import festLogo from '../images/logo.png';
import vid from '../images/fire3.mp4';

const Mainlogo = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <video autoPlay loop muted src={vid} className="fixed w-screen h-screen object-cover -z-10"></video>
      <div className="absolute flex flex-col justify-center items-center w-[60vw] z-10 opacity-100">
        {/* Apply only fadeIn to the logo */}
        <img src={festLogo} alt="Fest Logo" className="w-full animate-fadeIn" />
        {/* Apply both fadeIn and float1 to the subtext */}
        <div className="font-poppins text-[15px] text-white text-shadow-lg animate-fadeIn">
          BY THE ARTIST, FOR THE ARTIST
        </div>
      </div>
    </div>
  );
};

export default Mainlogo;
