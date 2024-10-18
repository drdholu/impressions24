import React from 'react';
import ImpressionsLogo from "../images/logo.png";
import AboutUs from '../components/AboutUs'
import Events from './Events';
import Memories from './Memories'

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[90vh] text-center text-white bg-black">
        <img src={ImpressionsLogo} alt="Impressions Logo" className="h-32 mx-auto mb-4 md:h-40" />
        <p className="text-xl">For the artist, by the artist</p>
      </div>
      <AboutUs/>
      <Events />
      <Memories />
    </div>
  );
};

export default LandingPage;