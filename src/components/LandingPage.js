import React from 'react';
import Mainlogo from './mainlogo';
import Navbar from './Navbar'
import Events from './Events'
const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Mainlogo/>
      <AboutUs/>
      <Events />
    </div>
  );
};

export default LandingPage;