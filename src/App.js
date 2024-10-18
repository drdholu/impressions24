// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './Form';
import LandingPage from './components/LandingPage'; // Adjust if this path is incorrect

const App = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyYj3vvB0vfW4fhd8LByGqmUJt9PCkTNiZ0QQz4D_6Q_8UuH9dYJKlu6X4W2CqpEy6_mw/exec';

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coordinator-form" element={<Form scriptURL={scriptURL} />} />
      </Routes>
    </div>
  );
};

export default App;
