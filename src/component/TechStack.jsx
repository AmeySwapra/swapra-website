import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import php from '../assets/php.jpg';
import mySql from '../assets/mysql.jpg';
import wordPress from '../assets/wordpress.png';
import flutter from '../assets/flutter.jpg';
import html from '../assets/html.jpg';
import java from '../assets/java.png';
import python from '../assets/python.jpg';
import android from '../assets/android.jpg';
import lavarel from '../assets/laravel.png';
import js from '../assets/javascript.jpg';

const TechStack = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    { src: php, alt: 'PHP' },
    { src: mySql, alt: 'MySQL' },
    { src: wordPress, alt: 'WordPress' },
    { src: flutter, alt: 'Flutter' },
    { src: html, alt: 'HTML' },
    { src: python, alt: 'Python' },
    { src: java, alt: 'Java' },
    { src: android, alt: 'Android' },
    { src: lavarel, alt: 'Laravel' },
    { src: js, alt: 'JavaScript' },
  ];

  return (
    <Box
      bg="blue.500"
      py={10}
      px={5}
      textAlign="center"
      position="relative"
    >
      <Box maxW="1200px" mx="auto">
        <Box mb={8}>
          <Text fontSize="xl" color="white">
            TECHNOLOGY INDEX
          </Text>
          <Heading as="h2" size="xl" color="white" mt={2}>
            Real Time Monitoring Your Infrastructure <br /> Branded Digital Solutions
          </Heading>
        </Box>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box key={index} px={4}>
              <Image src={logo.src} alt={logo.alt} mx="auto" />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TechStack;

