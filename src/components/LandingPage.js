import React from 'react';
import Mainlogo from './mainlogo';
import Navbar from './Navbar'
import Events from './Events'
import AboutUs from './AboutUs'
import Memories from './Memories'
const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Mainlogo/>
      <AboutUs/>
      <Events />
      <Memories />
    </div>
  );
};

export default LandingPage;