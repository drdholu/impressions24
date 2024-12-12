import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const TransitionWrapper = ({ children }) => {
  const location = useLocation();
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.set(overlayRef.current, { xPercent: -100 });
      tl.to(overlayRef.current, {
        xPercent: 0,
        duration: 1.5,
        ease: 'power3.inOut',
      })
      .to(overlayRef.current, {
        xPercent: 100,
        duration: 1.3,
        ease: 'power3.inOut',
        delay: 0.1,
        onComplete: () => {
          gsap.set(overlayRef.current, { xPercent: -100 });
        }
      });

      tl.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power3.inOut' },
        '-=0.5'
      );
    }, contentRef);

    return () => ctx.revert();
  }, [location]);

  return (
    <div className="relative">
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-black via-slate-900 to-black 
        backdrop-blur-sm backdrop-brightness-50 "
      >
        <h1 className='text-3xl text-white md:text-5xl font-extrabold text-transparent 
        bg-clip-text bg-gradient-to-r 
        from-white via-gray-200 to-gray-400 
        tracking-wide uppercase '>BY THE ARTIST</h1>
        <h1 className='text-3xl text-white md:text-5xl font-extrabold text-transparent 
        bg-clip-text bg-gradient-to-r 
        from-white via-gray-200 to-gray-400 
        tracking-wide uppercase '>FOR THE ARTIST</h1>
      </div>
      <div ref={contentRef} className="">
        {children}
      </div>
      
    </div>
    
  );
};

export default TransitionWrapper;