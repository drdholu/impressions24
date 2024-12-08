import React, { useEffect, useState } from 'react';

const GlowingCursor = () => {
  const [cursorStyle, setCursorStyle] = useState({
    left: '0px',
    top: '0px',
    opacity: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      setCursorStyle((prev) => ({ ...prev, opacity: 0 }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none bg-glow rounded-full h-3 w-3 shadow-glow transition-opacity duration-300`}
      style={{ ...cursorStyle }}
    ></div>
  );
};

export default GlowingCursor;
