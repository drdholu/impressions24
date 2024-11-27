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
        duration: 1.3,
        ease: 'power2.out',
      })
      .to(overlayRef.current, {
        xPercent: 100,
        duration: 1.3,
        ease: 'power2.in',
        delay: 0.1,
        onComplete: () => {
          gsap.set(overlayRef.current, { xPercent: -100 });
        }
      });

      tl.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.5'
      );
    }, contentRef);

    return () => ctx.revert();
  }, [location]);

  return (
    <div className="relative">
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full bg-gray-900"
      >
        <h1 className='text-3xl text-white md:text-5xl'>BY THE ARTIST</h1>
        <h1 className='text-3xl text-white md:text-5xl'>FOR THE ARTIST</h1>
      </div>
      <div ref={contentRef} className="">
        {children}
      </div>
    </div>
  );
};

export default TransitionWrapper;