
// import React from 'react';
// import PropTypes from 'prop-types';

// const SponsorsCard = ({ name, photo, description,link }) => {
//   return (
//     <a href={link} target="_blank" rel="noopener noreferrer">
//     <div className="relative w-80 h-60 border-2 rounded-lg shadow-lg bg-white overflow-hidden group">
//       <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform group-hover:-translate-x-20">
//         <img
//           src={photo}
//           alt={`${name}'s logo`}
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = 'fallback-image-url.jpg'; 
//           }}
//           className="w-32 h-48object-cover" // Adjusted image size
//         />
//       </div>
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-16">
//         <h3 className="text-2xl font-bold text-blue-600">{name}</h3>
// <p className="text-sm text-gray-500 mt-2 line-clamp-2">{description}</p>       </div>
//     </div>
//     </a>
//   );
// };

// SponsorsCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   photo: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// export default SponsorsCard;

import React from 'react';
import PropTypes from 'prop-types';

const SponsorsCard = ({ name, photo, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative w-80 h-60 border-2 rounded-lg shadow-lg bg-black overflow-hidden group">
        {/* Image Section */}
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform group-hover:-translate-y-10"> {/* Move up on hover */}
          <img
            src={photo}
            alt={`${name}'s logo`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'fallback-image-url.jpg'; 
            }}
            className="w-32 h-32 object-cover" // Adjusted image size
          />
        </div>
        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-20"> {/* Move up from bottom */}
          <h3 className="text-2xl font-bold text-blue-600">{name}</h3>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        </div>
      </div>
    </a>
  );
};

SponsorsCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, 
};

export default SponsorsCard;