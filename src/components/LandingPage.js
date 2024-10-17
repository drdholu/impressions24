import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const LandingPage = () => {
  return (
    <Box height="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.700" color="white">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Impressions</Heading>
        <Text fontSize="xl">For the artist, by the artist</Text>
      </VStack>
    </Box>
  );
};

export default LandingPage;