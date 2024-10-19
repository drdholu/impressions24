import React, { useState } from 'react';
import EventCard from './ui/EventCard';
import EventModal from './ui/EventModal';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: 1, title: 'Event 1', description: 'Details about Event 1' },
    { id: 2, title: 'Event 2', description: 'Details about Event 2' },
    { id: 3, title: 'Event 3', description: 'Details about Event 3' },
    { id: 4, title: 'Event 4', description: 'Details about Event 4' },
    { id: 5, title: 'Event 5', description: 'Details about Event 5' },
  ];

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div id="events" className="px-8 py-16 bg-white">
      <h2 className="mb-8 text-2xl text-center">Events</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
        ))}
      </div>
      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
};

export default Events;