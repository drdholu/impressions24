import React from 'react';

const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-bold">{event.title}</h2>
        <p className="mt-2">{event.description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;