import React, { useState } from 'react';
import { X } from 'lucide-react';

const EventCard = ({ event, onClick }) => (
  <div 
    className="p-6 transition-colors border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
    onClick={onClick}
  >
    <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
    <p className="text-gray-600">{event.description}</p>
  </div>
);

const EventModal = ({ event, onClose, open }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg">
        <button
          onClick={onClose}
          className="absolute text-gray-500 right-4 top-4 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="mb-4 text-2xl font-semibold">{event.title}</h2>
        <p className="mb-6 text-gray-600">{event.description}</p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: 1, title: 'Event 1', description: 'Details about Event 1' },
    { id: 2, title: 'Event 2', description: 'Details about Event 2' },
    { id: 3, title: 'Event 3', description: 'Details about Event 3' },
    { id: 4, title: 'Event 4', description: 'Details about Event 4' },
    { id: 5, title: 'Event 5', description: 'Details about Event 5' },
  ];

  return (
    <div id="events" className="px-4 py-16 mx-auto max-w-7xl">
      <h2 className="mb-8 text-3xl font-bold text-center">Events</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {events.map((event) => (
          <EventCard 
            key={event.id} 
            event={event} 
            onClick={() => setSelectedEvent(event)} 
          />
        ))}
      </div>
      <EventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)}
        open={!!selectedEvent}
      />
    </div>
  );
};

export default Events;