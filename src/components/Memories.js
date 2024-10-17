import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Memories = () => {
  const images = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg',
    // Add more image paths here
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Box id="memories" py={16} px={8} bg="gray.100">
      <Text fontSize="2xl" mb={8} textAlign="center">Memories</Text>
      <Carousel responsive={responsive}>
        {images.map((src, index) => (
          <Box key={index} p={2}>
            <img src={src} alt={`Memory ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Memories;