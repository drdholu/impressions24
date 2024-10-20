import React, { useState, useEffect } from 'react';
import image1 from '../images/memories/5.webp';
import image2 from '../images/memories/6.webp';
import image3 from '../images/memories/7.webp';
import image4 from '../images/memories/8.webp';
import image5 from '../images/memories/sabali7.webp';

const Memories = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div id="memories" className="px-8 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Our Memories</h2>
      <div className="relative w-full max-w-4xl mx-auto shadow-2xl rounded-xl">
        <div className="relative h-64 md:h-[32rem] overflow-hidden rounded-xl">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
                index === currentIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img src={src} alt={`Memory ${index + 1}`} className="object-cover w-full h-full rounded-xl" />
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-0 p-2 transition transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full shadow-md top-1/2 hover:bg-opacity-100">
          &#10094;
        </button>
        <button onClick={nextSlide} className="absolute right-0 p-2 transition transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full shadow-md top-1/2 hover:bg-opacity-100">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Memories;