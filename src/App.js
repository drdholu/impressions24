import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import Memories from './components/Memories';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <LandingPage />
        <AboutUs />
        <Events />
        <Memories />
      </Box>
    </ChakraProvider>
  );
}

export default App;