import React from 'react';
import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2} position="fixed" width="100%" zIndex="1000">
      <Flex alignItems="center">
        <Text fontSize="xl" fontWeight="bold">Logo</Text>
        <Spacer />
        <Flex>
          <Link href="#about" mx={2}>About</Link>
          <Link href="#events" mx={2}>Events</Link>
          <Link href="#memories" mx={2}>Memories</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;