import React from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import webPro from '../assets/web-project.jpg'
import digitalPro from '../assets/digital-project.jpg'
import softPro from '../assets/software-project.jpg'
import mobPro from '../assets/mobile-project.jpg'
import wordPro from '../assets/wordpress-project.jpg'
import socialPro from '../assets/social-project.jpg'



const CaseBlock = ({ imgSrc, title, category }) => {
  return (
    <Box className="case-block" position="relative" overflow="hidden" margin='20px'>
      <Image src={imgSrc} alt={title} />
      <Box
        className="overlay-box"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.6)"
        opacity={0}
        transition="opacity 0.3s"
        _hover={{ opacity: 1 }}
      >
        <IconButton
          as={Link}
          href={imgSrc}
          aria-label="Search"
          icon={<FaSearch />}
          variant="outline"
          color="white"
          borderColor="white"
          position="absolute"
          top={4}
          left={4}
          data-fancybox="case"
        />
        <Box className="content" p={4} color="white" mt={8}>
          <Heading as="h4" size="md">
            <Link href="#">{title}</Link>
          </Heading>
          <Text mt={2}>{category}</Text>
          <Link href="#" display="inline-flex" alignItems="center" mt={4}>
            <FaArrowRight />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const Project = () => {
  return (
    <Box className="cases-section" py={10}>
      <Box className="auto-container" maxW="1200px" mx="auto" textAlign="center">
        {/* Sec Title */}
        <Box className="sec-title" mb={8}>
          <Text className="title" fontSize="xl" color="gray.600">
            LATEST Projects
          </Text>
          <Heading as="h2" size="xl" mt={2}>
            Projects What We Develops
          </Heading>
        </Box>

        {/* Grid of Case Blocks */}
        <Grid templateColumns="repeat(auto-fit, minmax(320px, 1fr))" gap={6}>
          <CaseBlock
            imgSrc={webPro}
            title="Web Development"
            category="Web development is the work involved in developing a website for the Internet or an intranet."
          />
          <CaseBlock
            imgSrc={digitalPro}
            title="Digital Marketing"
            category="Digital marketing is the promotion of brands using digital communication."
          />
          <CaseBlock
            imgSrc={softPro}
            title="Software Development"
            category="Software development projects are structured endeavors to design, build, and deploy software solutions."
          />
          <CaseBlock
            imgSrc={mobPro}
            title="Mobile App Development"
            category="Creating software applications for mobile devices such as smartphones and tablets."
          />
          <CaseBlock
            imgSrc={socialPro}
            title="Social Media Marketing"
            category="Social media is digital technology that allows sharing ideas and information."
          />
          <CaseBlock
            imgSrc={wordPro}
            title="WordPress Project"
            category="WordPress provides the opportunity for anyone to create and share, from handcrafted personal anecdotes to world-changing movements."
          />
        </Grid>

        <Text mt={8} fontSize="lg" color="red.500">
          We Have Done More Than 1550+ Projects in Last 8 Years, With 100% Satisfaction.
        </Text>
      </Box>
    </Box>
  );
};

export default Project;
