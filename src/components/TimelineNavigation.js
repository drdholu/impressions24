// import React, { useState } from 'react';
// import { ChevronUp, ChevronDown } from 'lucide-react';

// const TimelineNavigation = ({ events, onEventSelect }) => {
//   const [selectedEventIndex, setSelectedEventIndex] = useState(0);

//   const handleNextEvent = () => {
//     setSelectedEventIndex((prevIndex) => 
//       prevIndex < events.length - 1 ? prevIndex + 1 : prevIndex
//     );
//     onEventSelect(events[selectedEventIndex + 1]);
//   };

//   const handlePrevEvent = () => {
//     setSelectedEventIndex((prevIndex) => 
//       prevIndex > 0 ? prevIndex - 1 : prevIndex
//     );
//     onEventSelect(events[selectedEventIndex - 1]);
//   };

//   return (
//     <div className="fixed right-8 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 z-50">
//       <div className="flex flex-col items-center space-y-4">
//         {/* Previous Event Button */}
//         <button 
//           onClick={handlePrevEvent} 
//           disabled={selectedEventIndex === 0}
//           className={`
//             p-2 rounded-full transition-all duration-300
//             ${selectedEventIndex === 0 
//               ? 'bg-gray-500/50 cursor-not-allowed' 
//               : 'bg-white/20 hover:bg-white/40 active:scale-95'}
//           `}
//         >
//           <ChevronUp 
//             size={24} 
//             color={selectedEventIndex === 0 ? '#888' : 'white'} 
//           />
//         </button>

//         {/* Event Indicators */}
//         <div className="flex flex-col items-center space-y-2">
//           {events.map((event, index) => (
//             <div 
//               key={event.id}
//               className={`
//                 w-3 h-3 rounded-full transition-all duration-300
//                 ${index === selectedEventIndex 
//                   ? 'bg-red-500 scale-125' 
//                   : 'bg-white/50 hover:bg-white/70'}
//               `}
//               onClick={() => {
//                 setSelectedEventIndex(index);
//                 onEventSelect(event);
//               }}
//             />
//           ))}
//         </div>

//         {/* Next Event Button */}
//         <button 
//           onClick={handleNextEvent} 
//           disabled={selectedEventIndex === events.length - 1}
//           className={`
//             p-2 rounded-full transition-all duration-300
//             ${selectedEventIndex === events.length - 1 
//               ? 'bg-gray-500/50 cursor-not-allowed' 
//               : 'bg-white/20 hover:bg-white/40 active:scale-95'}
//           `}
//         >
//           <ChevronDown 
//             size={24} 
//             color={selectedEventIndex === events.length - 1 ? '#888' : 'white'} 
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TimelineNavigation;


import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const TimelineNavigation = ({ events, onEventSelect }) => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const handleNextEvent = () => {
    setSelectedEventIndex((prevIndex) =>
      prevIndex < events.length - 1 ? prevIndex + 1 : prevIndex
    );
    onEventSelect(events[selectedEventIndex + 1]);
  };

  const handlePrevEvent = () => {
    setSelectedEventIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
    onEventSelect(events[selectedEventIndex - 1]);
  };

  return (
    <div className="relative">
      {/* Buttons for Day Selection */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {["Day 1", "Day 2", "Day 3"].map((day, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedEventIndex === index
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => {
              setSelectedEventIndex(index);
              onEventSelect(events[index]);
            }}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 z-50">
        <div className="flex flex-col items-center space-y-4">
          {/* Previous Event Button */}
          <button
            onClick={handlePrevEvent}
            disabled={selectedEventIndex === 0}
            className={`
              p-2 rounded-full transition-all duration-300
              ${
                selectedEventIndex === 0
                  ? "bg-gray-500/50 cursor-not-allowed"
                  : "bg-white/20 hover:bg-white/40 active:scale-95"
              }
            `}
          >
            <ChevronUp
              size={24}
              color={selectedEventIndex === 0 ? "#888" : "white"}
            />
          </button>

          {/* Event Indicators */}
         

          {/* Next Event Button */}
          <button
            onClick={handleNextEvent}
            disabled={selectedEventIndex === events.length - 1}
            className={`
              p-2 rounded-full transition-all duration-300
              ${
                selectedEventIndex === events.length - 1
                  ? "bg-gray-500/50 cursor-not-allowed"
                  : "bg-white/20 hover:bg-white/40 active:scale-95"
              }
            `}
          >
            <ChevronDown
              size={24}
              color={selectedEventIndex === events.length - 1 ? "#888" : "white"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineNavigation;
