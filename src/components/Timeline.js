import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import TimelineNavigation from './TimelineNavigation';

const multiDayEvents = {
  day1: [
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
      title: 'Team Strategy Session',
      time: '2:00 PM',
      description: 'Detailed project planning and goal setting',
      location: 'Meeting Room B',
      direction: 'right'
    },
    {
      id: 3,
      title: 'Initial Requirements Review',
      time: '4:30 PM',
      description: 'Discuss and finalize project requirements',
      location: 'Executive Boardroom',
      direction: 'left'
    }
  ],
  day2: [
    {
      id: 1,
      title: 'Design Workshop',
      time: '9:30 AM',
      description: 'Collaborative design brainstorming session',
      location: 'Design Studio',
      direction: 'left'
    },
    {
      id: 2,
      title: 'Technical Architecture Review',
      time: '1:30 PM',
      description: 'Deep dive into technical implementation strategy',
      location: 'Tech Conference Room',
      direction: 'right'
    },
    {
      id: 3,
      title: 'Stakeholder Mid-Point Update',
      time: '4:00 PM',
      description: 'Presentation of initial progress and insights',
      location: 'Executive Boardroom',
      direction: 'left'
    }
  ],
  day3: [
    {
      id: 1,
      title: 'Final Design Review',
      time: '10:00 AM',
      description: 'Comprehensive review of final design iterations',
      location: 'Design Studio',
      direction: 'left'
    },
    {
      id: 2,
      title: 'Client Presentation',
      time: '2:00 PM',
      description: 'Present project progress to key stakeholders',
      location: 'Executive Boardroom',
      direction: 'right'
    },
    {
      id: 3,
      title: 'Project Wrap-up Meeting',
      time: '4:30 PM',
      description: 'Final discussions and next steps',
      location: 'Conference Room A',
      direction: 'left'
    }
  ]
};

const Timeline = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const [activeEvent, setActiveEvent] = useState(multiDayEvents.day1[0]);

  const handleDaySelect = (day) => {
    setActiveDay(day);
    setActiveEvent(multiDayEvents[day][0]);
  };

  const handleEventSelect = (event) => {
    setActiveEvent(event);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat font-outfit" 
      style={{ backgroundImage: "url('/assets/images/coverbg.png')" }}
    >
      <div className="container mx-auto px-4 relative">
        {/* Teams Header */}
        <div className="flex justify-center items-center text-white py-8 space-x-8 drop-shadow-lg">
          <img 
            src="./impFootLogo.ico"
            alt="Team Logo" 
            className="h-28 w-28 object-contain" 
          />
          <h1 className="text-5xl font-bold tracking-wide">Project Timeline</h1>
        </div>

        {/* Day Selection */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(multiDayEvents).map((day) => (
            <button
              key={day}
              onClick={() => handleDaySelect(day)}
              className={`
                px-4 py-2 rounded-lg font-semibold transition-colors 
                ${activeDay === day 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-black hover:bg-gray-100'
                }
              `}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </button>
          ))}
        </div>

        {/* Timeline Navigation */}
        <TimelineNavigation 
          events={multiDayEvents[activeDay]} 
          onEventSelect={handleEventSelect} 
        />

        {/* Schedule Container */}
        <div className="relative w-full max-w-[700px] mx-auto mt-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-yellow-300 to-transparent -translate-x-1/2"></div>

          {/* Timeline */}
          <div className="relative">
            {multiDayEvents[activeDay].map((event) => (
              <div 
                key={event.id} 
                className={`
                  flex items-start mb-12 
                  ${event.direction === 'left' ? 'flex-row-reverse' : 'flex-row'}
                  ${activeEvent.id === event.id ? 'opacity-100' : 'opacity-50'}
                  transition-opacity duration-300
                `}
              >
                {/* Event Container */}
                <div className={`
                  max-w-[300px] 
                  ${event.direction === 'left' ? 'text-right mr-auto' : 'text-left ml-auto'}
                `}>
                  {/* Event Description */}
                  <div className={`
                    bg-black/70 backdrop-blur-md text-white p-6 rounded-lg shadow-lg 
                    ${event.direction === 'left' ? 'mr-6' : 'ml-6'}
                  `}>
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <p className="italic text-sm text-gray-300 mt-2">{event.description}</p>
                    
                    {/* Location */}
                    <div className="flex items-center space-x-2 text-gray-200 mt-4 hover:text-red-400 transition-colors">
                      <MapPin size={18} />
                      <span>{event.location}</span>
                    </div>

                    {/* Time */}
                    <div className="flex items-center space-x-2 text-yellow-400 mt-2">
                      <Clock size={18} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                {/* Time Wrapper */}
                <div className="inline-block mx-4">
                  <span className="bg-gradient-to-r from-red-500 to-yellow-400 text-white font-bold py-2 px-4 rounded shadow-md">
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