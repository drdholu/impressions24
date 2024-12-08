import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
  const blobsRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!blobsRef.current) return;

    // Create blobs
    const blobs = Array.from({ length: 3 }).map((_, i) => {
      const blob = document.createElement('div');
      blob.className = `absolute rounded-full blur-3xl opacity-50
        ${i === 0 ? 'bg-red-500' : i === 1 ? 'bg-red-800' : 'bg-black'}`;
      blob.style.width = `${40 + i * 5}%`;
      blob.style.height = `${40 + i * 5}%`;
      blob.style.willChange = 'transform';
      blobsRef.current.appendChild(blob);
      return blob;
    });

    // Initial positions
    gsap.set(blobs, {
      xPercent: -50,
      yPercent: -50,
      left: '50%',
      top: '50%',
    });

    // Mouse move handler with direct GSAP animation
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 0.2; // Increased movement factor
        const targetX = ((clientX - innerWidth / 2) * factor) * 0.7;
        const targetY = ((clientY - innerHeight / 2) * factor) * 0.7;

        gsap.to(blob, {
          x: targetX,
          y: targetY,
          duration: 0.3, // Reduced duration for snappier response
          ease: "power2.out"
        });
      });
    };

    // Simplified scroll handler
    const handleScroll = () => {
      const scrollSpeed = window.scrollY * 0.1;
      
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          rotation: scrollSpeed * (i + 1),
          duration: 0.2, // Faster rotation response
          ease: "none"
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      blobs.forEach(blob => blob.remove());
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-neutral-950">
      <div ref={blobsRef} className="relative w-full h-full" />
      <div 
        className="absolute inset-0 mix-blend-overlay opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;