// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import CoordinatorForm from './components/CoordinatorForm';
// import VolunteerForm from './components/VolunteerForm';
// import LandingPage from './components/LandingPage'; // Adjust if this path is incorrect
import Navbar from './components/Navbar';
import BackToTop from "./components/ui/BackToTop"
// import Footer from './components/ui/Footer';

// import VolunteerForm from './components/VolunteerForm';
// import CoordinatorForm from './components/CoordinatorForm';
import { urls } from './url';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <div className='font-sans'>
      <Navbar />
      <Routes>
        {urls.map((url, idx) => {
          return (
            <Route path={url.url} element={url.element} />
          )
        })}
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <BackToTop />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
