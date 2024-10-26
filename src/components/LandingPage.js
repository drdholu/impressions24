// import React, { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import Events from './Events';
import AboutUs from './AboutUs';
// import Memories from './Memories';
// import vid from '../images/fire3.3gp';
import logo from '../images/Logos/Name Logo filled.png';
// import canvas from '../images/background.webp'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedBackground from './ui/AnimatedBackground';
// import Spline from '@splinetool/react-spline';
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const mainLogoRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    gsap.to(mainLogoRef.current, {
      yPercent: 50,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      }
    });
  }, {scope: containerRef})

  return (
    <div>
      <AnimatedBackground/>
      <div ref={containerRef} className="flex items-center justify-center h-[90svh]">
        {/* <video autoPlay loop muted src={vid} className="w-full h-full object-cover z-[-1]"></video> */}
        {/* <img src={canvas} alt="" className='w-full h-full object-cover z-[-1] brightness-50'/> */}
        {/* <Spline className='object-cover w-full h-full brightness-50' scene="https://prod.spline.design/TbqwE-b2sM-CV50w/scene.splinecode" /> */}
        <div ref={mainLogoRef} className="absolute flex flex-col items-center justify-center w-3/5 opacity-100">
          <img
            src={logo}
            alt="Foreground Fest Logo"
            className="relative w-full transition-transform"
          />
          <div className="relative text-sm text-shadow-md">
            BY THE ARTIST, FOR THE ARTIST
          </div>
        </div>
      </div>
      <AboutUs />
      <Events />
      {/* <Memories /> */}
    </div>
  );
};

export default LandingPage;