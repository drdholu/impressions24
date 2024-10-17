import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';

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
    <div id="events" className="py-16 px-8 bg-white">
      <h2 className="text-2xl mb-8 text-center">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
        ))}
      </div>
      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
};

export default Events;