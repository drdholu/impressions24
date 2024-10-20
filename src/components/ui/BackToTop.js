import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > window.innerHeight) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= window.innerHeight) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    showScroll && (
      <div className="fixed cursor-pointer bottom-5 right-5" onClick={scrollTop}>
        <svg className="w-10 h-10 p-2 text-white bg-black rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </div>
    )
  );
};

export default BackToTop;