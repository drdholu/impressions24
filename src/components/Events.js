import React, { useState } from 'react';
import { Box, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import EventCard from './EventCard';
import EventModal from './EventModal';

const Events = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    onOpen();
  };

  return (
    <Box id="events" py={16} px={8} bg="white">
      <Text fontSize="2xl" mb={8} textAlign="center">Events</Text>
      <SimpleGrid columns={[1, null, 3]} spacing={8}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
        ))}
      </SimpleGrid>
      {selectedEvent && <EventModal isOpen={isOpen} onClose={onClose} event={selectedEvent} />}
    </Box>
  );
};

export default Events;