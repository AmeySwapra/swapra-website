import React from 'react';
import { Box, Flex, Heading, Text, VStack, Icon, Link } from '@chakra-ui/react';
import { FaCode, FaNetworkWired, FaLaptop, FaServer, FaSearch, FaMobileAlt, FaPaintBrush, FaDesktop } from 'react-icons/fa';

const services = [
  {
    title: "Web Development",
    description: "Most impressive websites & app experiences are rooted in smart design, embody clear vision, are backed by the right technology.",
    icon: FaCode,
    link: "website-design.php"
  },
  {
    title: "Software Development",
    description: "Software development is the process of designing, programming, testing and maintenance.",
    icon: FaNetworkWired,
    link: "software-development.php"
  },
  {
    title: "Digital Marketing",
    description: "Our digital strategy and consulting services help you build your business and make the right impact among your target audience.",
    icon: FaLaptop,
    link: "search-engine-marketing-seo.php"
  },
  {
    title: "Domain & Hosting",
    description: "A domain name is like the address of your home, web hosting is the space of your house where you place your furniture.",
    icon: FaServer,
    link: "domain-and-hosting-services-in-pune.php"
  },
  {
    title: "Search Engine Optimization",
    description: "We provide SEO services for small and large companies around the world to promote their business or services website.",
    icon: FaSearch,
    link: "search-engine-marketing-seo.php"
  },
  {
    title: "Mobile App Development",
    description: "The process of making software for smartphones, tablets, and digital assistants, most commonly for Android and iOS.",
    icon: FaMobileAlt,
    link: "mobile-app-development-in-pune.php"
  },
  {
    title: "UI/UX Design",
    description: "Build the product you need on time with an experienced team that uses a clear and effective design process.",
    icon: FaPaintBrush,
    link: "#"
  },
  {
    title: "Web Design",
    description: "Web design refers to the design of websites. It usually refers to the user experience aspects of website development.",
    icon: FaDesktop,
    link: "website-design.php"
  }
];

const ServicesSection = () => {
  return (
    <Box className="services-section" py={10} bg="gray.50" position="relative" mt="4">
      <Box
        className="pattern-layer"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage="url('/images/background/pattern-2.png')"
        backgroundSize="cover"
        zIndex={-1}
      />
      <Box className="auto-container" maxW="1200px" mx="auto" textAlign="center" mb={8}>
        <VStack className="sec-title" spacing={3} mb={8}>
          <Text className="title" fontSize="lg" color="gray.600">
            Our Services
          </Text>
          <Heading as="h2" size="xl" color="gray.800" lineHeight="1.2">
            We deal with the aspects of <br /> professional IT Services
          </Heading>
        </VStack>
        <Flex className="row" wrap="wrap" margin="20px" justify="space-between">
          {services.map((service, index) => (
            <Box
              key={index}
              className="service-block"
              p={5}
              mb={6}
              bg="white"
              borderRadius="md"
              boxShadow="lg"
              flexBasis={{ base: "100%", md: "48%", lg: "23%" }}
              textAlign="center"
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-5px)" }}
            >
              <VStack className="inner-box" spacing={4}>
                <Icon as={service.icon} boxSize={12} color="blue.500" />
                <Heading as="h5" size="md" color="gray.800">
                  <Link href={service.link}>{service.title}</Link>
                </Heading>
                <Text className="text" color="gray.600" textAlign="justify">
                  {service.description}
                </Text>
                <Link href={service.link} color="blue.500" fontSize="xl">
                  →
                </Link>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ServicesSection;
