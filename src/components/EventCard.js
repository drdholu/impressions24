import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const EventCard = ({ event, onClick }) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      onClick={onClick}
      cursor="pointer"
      _hover={{ bg: 'gray.100' }}
    >
      <Text fontSize="xl" fontWeight="bold">{event.title}</Text>
      <Text mt={2}>{event.description}</Text>
    </Box>
  );
};

export default EventCard;