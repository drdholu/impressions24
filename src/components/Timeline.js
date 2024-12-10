import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import TimelineNavigation from './TimelineNavigation';
// Sample Event Data (same as before)
const events = [
  {
    id: 1,
    title: 'Project Launch',
    time: '10:00 AM',
    description: 'Kickoff meeting for our exciting new project',
    location: 'Conference Room A',
    direction: 'left'
  },
  {
    id: 2,
    title: 'Design Review',
    time: '2:00 PM',
    description: 'Comprehensive review of design mockups and prototypes',
    location: 'Design Studio',
    direction: 'right'
  },
  {
    id: 3,
    title: 'Client Presentation',
    time: '4:30 PM',
    description: 'Present project progress to key stakeholders',
    location: 'Executive Boardroom',
    direction: 'left'
  }
];

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  const handleEventSelect = (event) => {
    setActiveEvent(event);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat font-outfit" 
      style={{backgroundImage: "url('/assets/images/coverbg.png')"}}
    >
      <div className="container mx-auto px-4 relative">
        {/* Teams Header */}
        <div className="flex justify-center items-center text-white py-8 space-x-8 drop-shadow-[2px_4px_6px_black]">
          <img 
            src= './impFootLogo.ico'
            alt="Team Logo" 
            className="h-28 w-28 object-contain" 
          />
          <h1 className="text-5xl font-bold">Project Timeline</h1>
        </div>

        {/* Timeline Navigation */}
        <TimelineNavigation 
          events={events} 
          onEventSelect={handleEventSelect} 
        />

        {/* Schedule Container */}
        <div className="relative w-full max-w-[660px] mx-auto mt-8">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-red-500 to-yellow-500 -translate-x-1/2"></div>

          {/* Timeline */}
          <div className="relative">
            {events.map((event) => (
              <div 
                key={event.id} 
                className={`
                  flex items-center mb-8 
                  ${event.direction === 'left' ? 'flex-row-reverse' : 'flex-row'}
                  ${activeEvent.id === event.id ? 'opacity-100' : 'opacity-30'}
                `}
              >
                {/* Event Container */}
                <div className={`
                  w-[300px] 
                  ${event.direction === 'left' ? 'text-right mr-auto' : 'text-left ml-auto'}
                `}>
                  {/* Event Flag */}
                  <div className="inline-block bg-white py-2 px-4 rounded-md shadow-sm mb-4">
                    <span className="font-semibold capitalize">{event.title}</span>
                  </div>

                  {/* Event Description */}
                  <div className={`
                    bg-black/60 backdrop-blur-sm text-white p-4 rounded-lg 
                    ${event.direction === 'left' ? 'mr-3' : 'ml-3'}
                  `}>
                    <div className="flex flex-col items-center space-y-2">
                      <p className="italic text-sm text-center">{event.description}</p>
                      
                      {/* Location */}
                      <div className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>

                      {/* Time */}
                      <div className="flex items-center space-x-2 text-yellow-300">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Time Wrapper */}
                <div className="inline-block mx-4">
                  <span className="bg-white text-red-500 font-bold py-1 px-2 rounded">
                    {event.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;