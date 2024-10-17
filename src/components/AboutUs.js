import React from 'react';

const AboutUs = () => {
  return (
    <div id="about" className="py-16 px-8 bg-gray-100">
      <div className="flex items-center justify-center">
        <img src="path/to/photo.jpg" alt="About Us" className="w-72 h-72 object-cover rounded-md" />
        <div className="ml-8">
          <p className="text-lg">
            Impressions is a celebration of art and creativity. Our mission is to provide a platform for artists to showcase their talents and connect with like-minded individuals. Join us for an unforgettable experience filled with inspiration and artistic expression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;