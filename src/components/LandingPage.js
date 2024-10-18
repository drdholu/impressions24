import React from 'react';
import Mainlogo from './mainlogo';
import Navbar from './Navbar'
import Events from './Events'
const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Mainlogo/>
      <Events />
    </div>
  );
};

export default LandingPage;