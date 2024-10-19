import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div
      className="p-4 border rounded-md cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <h3 className="text-xl font-bold">{event.title}</h3>
      <p className="mt-2">{event.description}</p>
    </div>
  );
};

export default EventCard;