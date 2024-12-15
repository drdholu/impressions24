import React, { useState, useEffect } from 'react';
import galleryData from './gallery.json';
import Navbar from './Navbar';

const GallerySection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the images from the JSON file
    setImages(galleryData.images);
  }, []);

  return (
    <div className="bg-fixed bg-no-repeat bg-cover bg-galleryBackground w-full h-full">
      <Navbar />
      <div className="mb-4 mt-12 text-5xl font-extrabold tracking-wider text-center text-white uppercase drop-shadow-md font-paperHeader">
         <p className="text-[2em]" style={{
           WebkitTextStroke: "0.01px black",
           textShadow: "2px 2px 2px black",
         }}>GALLERY</p>
       </div>
      
      <div className="p-10 grid grid-cols-4 grid-rows-3 gap-4 h-screen">
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-96">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[0]} alt="Gallery Image 1" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[1]} alt="Gallery Image 2" cla  ssName="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-96">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[2]} alt="Gallery Image 3" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[3]} alt="Gallery Image 4" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-80 mt-24 pt-2">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[4]} alt="Gallery Image 5" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-96">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[5]} alt="Gallery Image 6" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-28 relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-56">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[6]} alt="Gallery Image 7" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[7]} alt="Gallery Image 8" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-32 pt-2 relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-full mt-32">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[8]} alt="Gallery Image 9" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-full mt-28">
          <div className="flex justify-center items-center w-full h-full ">
            <img src={images[9]} alt="Gallery Image 10" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-96 mt-16">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[10]} alt="Gallery Image 11" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[11]} alt="Gallery Image 12" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* <div className="mt-40 relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-60">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[12]} alt="Gallery Image 12" className="w-full h-full object-cover" />
          </div>
        </div> */}
        {/* <div className="mt-40 relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-60">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[12]} alt="Gallery Image 12" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-60">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[13]} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-40 relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-60">
          <div className="flex justify-center items-center w-full h-full">
            <img src={images[12]} alt="Gallery Image 12" className="w-full h-full object-cover" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GallerySection;