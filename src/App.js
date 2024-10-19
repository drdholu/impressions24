// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CoordinatorForm from './components/CoordinatorForm';
import VolunteerForm from './components/VolunteerForm';
import LandingPage from './components/LandingPage'; // Adjust if this path is incorrect
import Navbar from './components/Navbar';
import BackToTop from "./components/ui/BackToTop"

const App = () => {
  // const scriptURL1 = 'https://script.google.com/macros/s/AKfycbyYj3vvB0vfW4fhd8LByGqmUJt9PCkTNiZ0QQz4D_6Q_8UuH9dYJKlu6X4W2CqpEy6_mw/exec';

  // const scriptURL2 = 'https://script.google.com/macros/s/AKfycbzaQoSHq-xyF7jiUnI7cPWT2pD-Uibiel0E9dsBM5_4PtEsjNBljLqOgD6ElZXlTawx/exec';
  return (
    <div className='font-sans'>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coordinator-form" element={<CoordinatorForm />} />
        <Route path="/volunteer-form" element={<VolunteerForm />} />
      </Routes>
      <BackToTop />
    </div>
  );
};

export default App;
