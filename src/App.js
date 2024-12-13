// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
// import CoordinatorForm from './components/CoordinatorForm';
// import VolunteerForm from './components/VolunteerForm';
// import LandingPage from './components/LandingPage'; 
// import Navbar from './components/Navbar';
// import BackToTop from "./components/ui/BackToTop"
// import Footer from './components/ui/Footer';

// import VolunteerForm from './components/VolunteerForm';
// import CoordinatorForm from './components/CoordinatorForm';
import { urls } from './url';
import ErrorPage from './components/ErrorPage';
// import gsap from 'gsap';
// import Preloader from './components/ui/Preloader';
// import TransitionWrapper from './components/ui/TransitionWrapper';
// import CustomCursor from './components/ui/CustomeCursor';
// import AnimatedBackground from './components/ui/AnimatedBackground';
// import Spline from '@splinetool/react-spline';
// import EventsPage from './components/EventsPage';
// import Explore from './components/Explore';
// import MainCards from './components/MainCards';
const App = () => {
  return (
    // <Preloader>
      <div className=''>
        <Routes>
          {urls.map((url, idx) => {
            return (
              <Route key={idx} path={url.url} element={url.element} />
            )
          })}
          <Route path="*" element={<ErrorPage />} />
        </Routes> 
        {/* <CustomCursor /> */}
        {/* <Routes>
          <Route path="/" element={<MainCards />} />
          <Route path="/events/:moduleName" element={<EventsPage />} />
          <Route path="/events/:moduleName/:eventTitle" element={<Explore />} />
        </Routes> */}
        {/* <MainCards /> */}
      </div>
    // </Preloader>
=======
import Teams from './components/teams';
const App = () => {
  return (
    <Teams/>
>>>>>>> dev_sahil
  );
};

export default App;
