import React, { useState, useEffect, useRef } from 'react';
import galleryData from './gallery.json';
import Navbar from './Navbar';

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fetch the images from the JSON file
    setImages(galleryData.images);

    // Function to check screen size and update isMobile state
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Typical breakpoint for mobile devices
    };

    // Check screen size on initial load
    checkScreenSize();

    // Add event listener to check screen size on resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const AnimatedGalleryItem = ({ children, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null, // viewport
          threshold: 0.1 // 10% of the element is visible
        }
      );

      if (itemRef.current) {
        observer.observe(itemRef.current);
      }

      return () => {
        if (itemRef.current) {
          observer.unobserve(itemRef.current);
        }
      };
    }, []);

    return (
      <div 
        ref={itemRef}
        className={`
          transform transition-all duration-700 ease-out
          ${isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'}
        `}
      >
        {children}
      </div>
    );
  };

  const DesktopGallery = () =>(
    <AnimatedGalleryItem>
      <div className="p-10 grid grid-cols-4 grid-rows-4 gap-4 h-screen">
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-96 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[0]} alt="Gallery Image 1" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-56 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[1]} alt="Gallery Image 2" cla  ssName="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-96 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[2]} alt="Gallery Image 3" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-72 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[3]} alt="Gallery Image 4" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-80 mt-60 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[4]} alt="Gallery Image 5" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-20 relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-96 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[5]} alt="Gallery Image 6" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-60 relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-56 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[6]} alt="Gallery Image 7" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-36 relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[7]} alt="Gallery Image 8" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-[416px] relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-72 p-0 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[8]} alt="Gallery Image 9" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-[316px] relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-80 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full ">
            <img src={images[9]} alt="Gallery Image 10" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-[316px] relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-80 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[10]} alt="Gallery Image 11" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-[152px] relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-96 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[11]} alt="Gallery Image 12" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-[562px] relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-60 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[12]} alt="Gallery Image 12" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-[492px] relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-60 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[13]} alt="Gallery Image 12" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-[492px] relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-72 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[14]} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-[396px] relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-80 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[15]} alt="Gallery Image 12" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </AnimatedGalleryItem>
  );

  // Mobile Vertical Layout
  const MobileGallery = () => (
    <div className="p-4 space-y-4">
      {images.map((image, index) => (
        <AnimatedGalleryItem key={index}>
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-lg bg-white w-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110"
          >
            <div className="flex justify-center items-center w-full">
              <img 
                src={image} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </AnimatedGalleryItem>
      ))}
    </div>
  );

  return (
    <div className="bg-fixed bg-no-repeat bg-cover bg-galleryBackground w-full h-full">
      <Navbar />
      <div className="mb-4 mt-12 text-5xl font-extrabold tracking-wider text-center text-white uppercase drop-shadow-md font-paperHeader">
        <p 
          className="text-[2em]" 
          style={{
            WebkitTextStroke: "0.01px black",
            textShadow: "2px 2px 2px black",
          }}
        >
          GALLERY
        </p>
      </div>
      
      {/* Conditional rendering based on screen size */}
      {isMobile ? <MobileGallery /> : <DesktopGallery />}
    </div>
  );
};

export default GallerySection;




