import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import TimelineNavigation from './TimelineNavigation';
import Navbar from './Navbar.js';

const multiDayEvents = {
  day1: [
    {
      id: 1,
      title: 'Project Launch',
      time: '10:00 AM',
      description: 'Kickoff meeting for our exciting new project',
      location: 'Conference Room A',
      direction: 'left',
    },
    {
      id: 2,
      title: 'Team Strategy Session',
      time: '2:00 PM',
      description: 'Detailed project planning and goal setting',
      location: 'Meeting Room B',
      direction: 'right',
    },
    {
      id: 3,
      title: 'Initial Requirements Review',
      time: '4:30 PM',
      description: 'Discuss and finalize project requirements',
      location: 'Executive Boardroom',
      direction: 'left',
    },
  ],
  day2: [
    {
      id: 1,
      title: 'Workshop on Development',
      time: '11:00 AM',
      description: 'Interactive session with industry experts',
      location: 'Tech Hall',
      direction: 'left',
    },
    {
      id: 2,
      title: 'Code Review Session',
      time: '3:00 PM',
      description: 'Improving project code quality',
      location: 'Lab Room C',
      direction: 'right',
    },
  ],
  day3: [
    {
      id: 1,
      title: 'Final Presentation',
      time: '9:30 AM',
      description: 'Showcasing project outcomes to stakeholders',
      location: 'Auditorium',
      direction: 'left',
    },
    {
      id: 2,
      title: 'Feedback & Closing',
      time: '12:00 PM',
      description: 'Collecting feedback and concluding the event',
      location: 'Main Hall',
      direction: 'right',
    },
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
    <div className="min-h-screen bg-cover bg-center bg-no-repeat font-outfit" style={{ backgroundImage: "url('/assets/images/coverbg.png')" }}>
      <Navbar color="none" fixed={true} />

      <div className="container mx-auto px-4 relative mt-20">
        {/* Day Selection */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {Object.keys(multiDayEvents).map((day) => (
            <button
              key={day}
              onClick={() => handleDaySelect(day)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeDay === day
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </button>
          ))}
        </div>

        {/* Timeline Navigation */}
        <TimelineNavigation events={multiDayEvents[activeDay]} onEventSelect={handleEventSelect} />

        <div className="relative w-full max-w-[700px] mx-auto mt-12">
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-yellow-300 to-transparent -translate-x-1/2"></div>

          <div className="relative">
            {multiDayEvents[activeDay].map((event) => (
              <div
                key={event.id}
                className={`flex items-start mb-12 ${
                  event.direction === 'left' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className="w-[45%] p-6 bg-black/70 text-white rounded-lg shadow-lg relative"
                  style={{
                    marginLeft:0,
                    marginRight:0,
                  }}
                >
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="italic text-sm text-gray-300 mt-2">{event.description}</p>
                  <div className="flex items-center space-x-2 text-gray-200 mt-4 hover:text-red-400 transition-colors">
                    <MapPin size={18} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400 mt-2">
                    <Clock size={18} />
                    <span>{event.time}</span>
                  </div>
                </div>
                <div className="w-[10%] flex justify-center items-center">
                  <span className="block w-4 h-4 bg-red-500 rounded-full"></span>
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
