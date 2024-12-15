// import React from 'react';
// import Navbar from './Navbar';
// import galleryData from './gallery.json'; // JSON file for image data

// const GalleryCard = ({ image }) => {
//     return (
//       <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white w-full h-full">
//         {/* Image Container */}
//         <div className="flex justify-center items-center w-full h-full">
//           <img 
//             src={image} 
//             alt="Gallery" 
//             className="w-full h-full object-cover" // Changed here
//           />
//         </div>
//       </div>
//     );
//   };
  

// const GallerySection = () => {
//   return (
//     <div className="bg-fixed bg-no-repeat bg-cover bg-galleryBackground w-full h-full">
//       <Navbar />
//       {/* Header Section */}
//       <div className="mb-12 mt-8 text-5xl font-extrabold tracking-wider text-center text-white uppercase drop-shadow-md font-paperHeader">
//         <p className="text-[2em]" style={{
//           WebkitTextStroke: "0.01px black",
//           textShadow: "2px 2px 2px black",
//         }}>GALLERY</p>
//       </div>
      
//       {/* Grid Section */}
//       <div className="px-4 max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-100">
//         {galleryData.images.map((image, index) => (
//           <GalleryCard key={index} image={image} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GallerySection;

import React, { useState } from 'react';
import Navbar from './Navbar';
import galleryData from './gallery.json'; // JSON file for image data

const GalleryCard = ({ image, onClick }) => {
  return (
    <div className="relative group w-full h-96 perspective-800">
      <div
        className="relative w-full h-full transition-transform duration-300 ease-out transform-style-3d backface-hidden rounded-lg shadow-lg"
        onClick={() => onClick(image)} // Trigger onClick when image is clicked
      >
        {/* Card Background */}
        <div
          className="absolute inset-0 bg-center bg-cover rounded-lg filter brightness-75 group-hover:brightness-50 shadow-lg"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Card Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg" />
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [expandedImage, setExpandedImage] = useState(null); // State to track the expanded image
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index in modal

  const handleImageClick = (image, index) => {
    setExpandedImage(image); // Set the clicked image to the expanded state
    setCurrentIndex(index); // Set the current image index for navigation
  };

  const closeExpandedImage = () => {
    setExpandedImage(null); // Close the expanded image
    setCurrentIndex(0); // Reset the current index
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryData.images.length; // Loop back to the first image
    setExpandedImage(galleryData.images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryData.images.length) % galleryData.images.length; // Loop back to the last image
    setExpandedImage(galleryData.images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="bg-fixed bg-no-repeat bg-cover bg-galleryBackground w-full h-full">
      <Navbar />
      
      {/* Header Section */}
      <div className="mb-12 mt-8 text-5xl font-extrabold tracking-wider text-center text-white uppercase drop-shadow-md font-paperHeader">
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

      {/* Grid Section */}
      <div className="px-4 max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-100">
        {galleryData.images.map((image, index) => (
          <GalleryCard key={index} image={image} onClick={() => handleImageClick(image, index)} />
        ))}
      </div>

      {/* Modal for expanded image */}
      {expandedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative max-w-full max-h-full">
            <img
              src={expandedImage}
              alt="Expanded"
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />
            {/* Close Button */}
            <button
              onClick={closeExpandedImage}
              className="absolute top-4 right-4 text-white text-4xl font-bold bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <i className="fas fa-times" /> {/* Font Awesome Close Icon */}
            </button>

            {/* Left Arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <i className="fas fa-chevron-left" /> {/* Font Awesome Left Arrow */}
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <i className="fas fa-chevron-right" /> {/* Font Awesome Right Arrow */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
