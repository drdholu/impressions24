import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  const isMobile = () => {
    if (typeof navigator !== 'undefined') {
      return /Android|Mobi/i.test(navigator.userAgent);
    }
    return false;
  };

  useEffect(() => {
    if (isMobile()) return;

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHovered(true));
        el.addEventListener('mouseout', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  if (isMobile()) return null;

  return (
    <>
      <style>
        {`
          .cursor {
            width: 20px;
            height: 20px;
            border: 2px solid #fefefe;
            border-radius: 100%;
            position: fixed;
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: all 150ms ease;
            transition-property: background-color, opacity, transform, mix-blend-mode;
            z-index: 9999;
            mix-blend-mode: difference;
          }

          .cursor--hidden {
            opacity: 0;
          }

          .cursor--link-hovered {
            transform: translate(-50%, -50%) scale(1.25);
            background-color: #fefefe;
          }

          .cursor--clicked {
            transform: translate(-50%, -50%) scale(0.9);
            background-color: #fefefe;
          }

          html, body {
            cursor: none;
          }

          html *, body * {
            cursor: none;
          }
        `}
      </style>
      <div
        className={`cursor ${hidden ? 'cursor--hidden' : ''} ${
          clicked ? 'cursor--clicked' : ''
        } ${linkHovered ? 'cursor--link-hovered' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  );
};

export default CustomCursor;