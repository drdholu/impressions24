import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Memories = () => {
  const images = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg',
    // Add more image paths here
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id="memories" className="py-16 px-8 bg-gray-100">
      <h2 className="text-2xl mb-8 text-center">Memories</h2>
      <Carousel responsive={responsive}>
        {images.map((src, index) => (
          <div key={index} className="p-2">
            <img src={src} alt={`Memory ${index + 1}`} className="w-full rounded-md" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Memories;