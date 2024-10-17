import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box id="about" py={16} px={8} bg="gray.100">
      <Flex alignItems="center" justifyContent="center">
        <Image src="path/to/photo.jpg" alt="About Us" boxSize="300px" objectFit="cover" borderRadius="md" />
        <Box ml={8}>
          <Text fontSize="lg">
            Impressions is a celebration of art and creativity. Our mission is to provide a platform for artists to showcase their talents and connect with like-minded individuals. Join us for an unforgettable experience filled with inspiration and artistic expression.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutUs;