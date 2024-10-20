import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../images/memories/5.webp';
import image2 from '../images/memories/6.webp';
import image3 from '../images/memories/7.webp';
import image4 from '../images/memories/8.webp';
import image5 from '../images/memories/sabali7.webp';

const Memories = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]); // Include nextSlide in the dependency array

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
              <img
                src={src}
                alt={`Memory ${index + 1}`}
                className="absolute block object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute p-3 transition-all duration-200 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 -left-4 md:-left-6 hover:bg-gray-50 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute p-3 transition-all duration-200 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 -right-4 md:-right-6 hover:bg-gray-50 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        <div className="absolute flex gap-3 -translate-x-1/2 bottom-4 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memories;