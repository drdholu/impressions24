// App.js
import React, {Suspense, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
// import CoordinatorForm from './components/CoordinatorForm';
// import VolunteerForm from './components/VolunteerForm';
// import LandingPage from './components/LandingPage'; // Adjust if this path is incorrect
import Navbar from './components/Navbar';
import BackToTop from "./components/ui/BackToTop"
import Footer from './components/ui/Footer';

const VolunteerForm = lazy(() => import('./components/VolunteerForm'));
const CoordinatorForm = lazy(() => import('./components/CoordinatorForm'));
const LandingPage = lazy(() => import('./components/LandingPage'));

const App = () => {
  return (
    <div className='font-sans'>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coordinator-form" element={<CoordinatorForm />} />
        <Route path="/volunteer-form" element={<VolunteerForm />} />
      </Routes>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
