import React from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';

const Bussiness = () => {
  return (
    <Box
      className="call-to-action-section"
      bgImage="url('/images/background/pattern-3.png')"
      bgSize="cover"
      bgPosition="center"
      py={10}
      bg='red.500'
    >
      <Box className="auto-container" maxW="1200px" mx="auto">
        <Flex className="row" align="center" justify="space-between" flexWrap="wrap">
          {/* Heading Column */}
          <Box className="heading-column" flex="1" pr={{ lg: 8 }} mb={{ base: 4, lg: 0 }} marginLeft={'20px'}>
            <Heading as="h2" size="lg" color="white">
              Preparing For Your Business <br /> Success With Swapra Technologies
            </Heading>
          </Box>
          {/* Button Column */}
          <Box className="button-column" flexBasis={{ base: '100%', lg: 'auto' }}>
            <Button
              as="a"
              href="website-design-and-digital-marketing-company-in-pune.php"
              size="lg"
              variant="solid"
              colorScheme="blue"
              className="theme-btn btn-style-two"
              marginRight='50px'
            >
              Meet With Us
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Bussiness;
