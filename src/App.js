// App.js
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import CoordinatorForm from './components/CoordinatorForm';
// import VolunteerForm from './components/VolunteerForm';
// import LandingPage from './components/LandingPage'; 
// import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage'; 
// import Navbar from './components/Navbar';
import BackToTop from "./components/ui/BackToTop"
// import Footer from './components/ui/Footer';

// import VolunteerForm from './components/VolunteerForm';
// import CoordinatorForm from './components/CoordinatorForm';
import { urls } from './url';
import ErrorPage from './components/ui/ErrorPage';
// import gsap from 'gsap';
// import Preloader from './components/ui/Preloader';
import TransitionWrapper from './components/ui/TransitionWrapper';
import CustomCursor from './components/ui/CustomeCursor';
// import AnimatedBackground from './components/ui/AnimatedBackground';
// import Spline from '@splinetool/react-spline';
import EventsPage from './components/EventsPage'
import Explore from './components/Explore'
import CoordinatorInductionResults from './components/CoordinatorInductionResults';

const App = () => {
  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = '/public/teams_bg.webp';
  }, []);

  return (
    // <Preloader>
    <div className=''>
      {/* <Navbar /> */}
      <CustomCursor />
      <TransitionWrapper>
        <Routes>
          {urls.map((url, idx) => {
            return (
              <Route key={idx} path={url.url} element={url.element} />
            )
          })}
          <Route path='/events/:moduleName' element={<EventsPage />} />
          <Route path='/events/:moduleName/:eventTitle' element={<Explore />} />
          <Route path='/coordinator-induction-results' element={<CoordinatorInductionResults />} />
          <Route path="*" element={<ErrorPage />} />
       
        </Routes>
      </TransitionWrapper>
      <BackToTop />
      {/* <Footer />  */}
    </div>


    // </Preloader>
  );
};

export default App;

// import React from "react";
// import FiberScene from './components/FiberScene'
// import { PerspectiveCamera } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import FiberScene2 from "./components/FiberScene2";
// function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//         <FiberScene2 />
//     </div>
//   );
// }

// export default App;

