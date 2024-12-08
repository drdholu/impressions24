import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './ParallaxScene.css';

// Import images 
import skyImage from './assets/sky.jpg';
import mountBgImage from './assets/mountBg.png';
import mountMgImage from './assets/mountMg.png';
import cloud2Image from './assets/cloud2.png';
import mountFgImage from './assets/mountFg.png';
import cloud1Image from './assets/cloud1.png';
import cloud3Image from './assets/cloud3.png';
import cloud1MaskImage from './assets/cloud1Mask.jpg';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ParallaxScene = () => {
  const arrowBtnRef = useRef(null);

  useEffect(() => {
    // Parallax Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scrollDist',
        start: '0 0',
        end: '100% 100%',
        scrub: 1
      }
    });

    tl.fromTo('.sky', {y: 0}, {y: -200}, 0)
      .fromTo('.cloud1', {y: 100}, {y: -800}, 0)
      .fromTo('.cloud2', {y: -150}, {y: -500}, 0)
      .fromTo('.cloud3', {y: -50}, {y: -650}, 0)
      .fromTo('.mountBg', {y: -10}, {y: -100}, 0)
      .fromTo('.mountMg', {y: -30}, {y: -250}, 0)
      .fromTo('.mountFg', {y: -50}, {y: -600}, 0);

    // Arrow Button Interactions
    const arrowBtn = arrowBtnRef.current;
    
    const handleMouseEnter = () => {
      gsap.to('.arrow', {y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto'});
    };

    const handleMouseLeave = () => {
      gsap.to('.arrow', {y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto'});
    };

    const handleClick = () => {
      gsap.to(window, {scrollTo: window.innerHeight, duration: 1.5, ease: 'power1.inOut'});
    };

    arrowBtn.addEventListener('mouseenter', handleMouseEnter);
    arrowBtn.addEventListener('mouseleave', handleMouseLeave);
    arrowBtn.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      arrowBtn.removeEventListener('mouseenter', handleMouseEnter);
      arrowBtn.removeEventListener('mouseleave', handleMouseLeave);
      arrowBtn.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div className="scrollDist"></div>
      <main>
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image xlinkHref={cloud1MaskImage} width="1200" height="800"/>
            </g>
          </mask>
          
          <image className="sky" xlinkHref={skyImage} width="1200" height="590" />
          <image className="mountBg" xlinkHref={mountBgImage} width="1200" height="800"/>    
          <image className="mountMg" xlinkHref={mountMgImage} width="1200" height="800"/>    
          <image className="cloud2" xlinkHref={cloud2Image} width="1200" height="800"/>    
          <image className="mountFg" xlinkHref={mountFgImage} width="1200" height="800"/>
          <image className="cloud1" xlinkHref={cloud1Image} width="1200" height="800"/>
          <image className="cloud3" xlinkHref={cloud3Image} width="1200" height="800"/>
          
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />      
            <text x="350" y="200" fill="#162a43">FURTHER</text>
          </g>
          
          <rect 
            ref={arrowBtnRef}
            id="arrow-btn" 
            width="100" 
            height="100" 
            opacity="0" 
            x="550" 
            y="220" 
            style={{cursor: 'pointer'}}
          />
        </svg>
      </main>
    </>
  );
};

export default ParallaxScene;