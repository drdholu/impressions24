import React from 'react';
import ImpressionsCampusShot from '../images/impressions_campus_shot.webp'

const AboutUs = () => {
  return (
    <div id="about" className="px-8 py-16 bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <img src={ImpressionsCampusShot} alt="About Us" className="object-cover rounded-md md:w-96 md:h-80" />
        <div className="">
          <p className="text-lg text-center">
            Impressions is a celebration of art and creativity. Our mission is to provide a platform for artists to showcase their talents and connect with like-minded individuals. Join us for an unforgettable experience filled with inspiration and artistic expression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;