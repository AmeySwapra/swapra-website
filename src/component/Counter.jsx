import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration, title }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = (timestamp) => {
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame((timestamp) => {
        start = timestamp;
        step(timestamp);
      });
    }
  }, [inView, end, duration]);

  return (
    <VStack ref={ref} spacing={3} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold">
        {count}+
      </Text>
      <Text fontSize="xl">{title}</Text>
    </VStack>
  );
};

const CounterSection = () => {
  return (
    <Box py={10} bg="gray.100">
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-around"
        flexWrap="wrap"
        textAlign="center"
      >
        <Counter end={330} duration={3000} title="ACTIVE CLIENTS" />
        <Counter end={1550} duration={5000} title="PROJECTS DONE" />
        <Counter end={25} duration={2000} title="TEAM MANAGEMENT" />
        <Counter end={70} duration={3500} title="EMPLOYEES" />
      </Flex>
    </Box>
  );
};

export default CounterSection;

