import React, { useState, useEffect } from 'react';
import { MapPin, Clock } from 'lucide-react';
import TimelineNavigation from './TimelineNavigation';
import Navbar from './Navbar.js';

const Timeline = () => {
  const [activeDay, setActiveDay] = useState('17th');
  const [activeEvent, setActiveEvent] = useState(null);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedVenue, setSelectedVenue] = useState('All');
  const [multiDayEvents, setMultiDayEvents] = useState({});
  const [eventTypes, setEventTypes] = useState([]);
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch('/data/Showflow.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch events data');
        }
        
        const data = await response.json();
        setMultiDayEvents(data.multiDayEvents);
        setEventTypes(data.eventTypes);
        setVenues(data.venues);

        // Default to first event in day1
        setActiveEvent(data.multiDayEvents['17th Dec'][0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEventsData();
  }, []);

  // Handle Day Select
  const handleDaySelect = (day) => {
    setActiveDay(day);
    setActiveEvent(multiDayEvents[day][0]); // Set the first event of the selected day
  };

  // Handle Event Select
  const handleEventSelect = (event) => {
    setActiveEvent(event);
  };

  // Handle Filter Changes
  const handleTypeFilterChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleVenueFilterChange = (event) => {
    setSelectedVenue(event.target.value);
  };

  // Filter Events
  const filteredEvents = multiDayEvents[activeDay]?.filter((event) => {
    const typeMatch = selectedType === 'All' || event.type === selectedType;
    const venueMatch = selectedVenue === 'All' || event.venue === selectedVenue;
    return typeMatch && venueMatch;
  }) || [];

  // Loading and Error States
  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <div className="fixed inset-0 bg-cover bg-center bg-no-repeat overflow-auto font-outfit" style={{ backgroundImage: "url('/5230.jpg')" }}>
      <Navbar color="none" fixed={true} />

      <div className="relative z-10 min-h-screen px-4 py-16">
        {/* Day Selection */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {Object.keys(multiDayEvents).map((day) => (
            <button
              key={day}
              onClick={() => handleDaySelect(day)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors text-base md:text-lg ${
                activeDay === day
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </button>
          ))}
        </div>

<div className="flex justify-center gap-4 sm:gap-8 mb-8 flex-wrap">
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
    <div className="flex flex-col sm:flex-row items-center">
      <label htmlFor="eventType" className="mr-2 text-lg sm:text-xl text-gray-900 font-bold">Event Type:</label>
      <select
        id="eventType"
        value={selectedType}
        onChange={handleTypeFilterChange}
        className="px-6 py-3 rounded-lg border border-gray-300 shadow-sm w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg sm:text-xl text-gray-900 font-medium"
      >
        <option value="All">All</option>
        {eventTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>

    <div className="flex flex-col sm:flex-row items-center">
      <label htmlFor="venue" className="mr-2 text-lg sm:text-xl text-gray-900 font-bold">Venue:</label>
      <select
        id="venue"
        value={selectedVenue}
        onChange={handleVenueFilterChange}
        className="px-6 py-3 rounded-lg border border-gray-300 shadow-sm w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg sm:text-xl text-gray-900 font-medium"
      >
        <option value="All">All</option>
        {venues.map((venue) => (
          <option key={venue} value={venue}>{venue}</option>
        ))}
      </select>
    </div>
  </div>
</div>

        {/* Timeline Navigation */}
        <TimelineNavigation events={filteredEvents} onEventSelect={handleEventSelect} />

        <div className="relative w-full max-w-[700px] mx-auto mt-12">
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-yellow-300 to-transparent -translate-x-1/2"></div>

          <div className="relative">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className={`flex items-start mb-12 ${event.direction === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className="w-[45%] p-6 bg-white text-black rounded-lg shadow-lg relative">
                  <h3 className="text-xl sm:text-2xl font-semibold">{event.title}</h3>
                  <p className="italic text-sm sm:text-base text-gray-700 mt-2">{event.description}</p>
                  <div className="flex items-center space-x-2 text-gray-700 mt-4 hover:text-red-400 transition-colors">
                    <MapPin size={18} />
                    <span className="text-sm sm:text-base">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400 mt-2">
                    <Clock size={18} />
                    <span className="text-sm sm:text-base">{event.time}</span>
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