import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Image,
    VStack,
    HStack,
    Icon,
    Link,
  } from "@chakra-ui/react";
  import { FaAward, FaGlobe, FaClock, FaLongArrowAltRight } from "react-icons/fa";
  import aboutImg from "../assets/About-img.png";
  
  const About = () => {
    return (
      <Box as="section" className="about-section" py={10}>
        <Container maxW="container.xl">
          <Box textAlign="center" mb={8}>
            <Text fontSize="lg" color="gray.500">
              ABOUT COMPANY
            </Text>
            <Heading as="h2" size="xl">
              Welcome To{" "}
              <Box as="span" color="#f37020" fontSize="45px">
                S
              </Box>
              waPra Technologies
            </Heading>
          </Box>
  
          <Flex direction={{ base: "column", lg: "row" }} spacing={8}>
            {/* Content Column */}
            <VStack
              align="start"
              flex="1"
              spacing={6}
              mb={{ base: 8, lg: 0 }}
              pr={{ lg: 8 }}
            >
              <Text textAlign="justify">
                A Leading Website Development & Digital Marketing Company
                Providing one-stop solution for all your business needs!!!!
                <br />
                We utilize the latest technology to bring results to grow our
                clients’ business. From Website Design, Search Engine
                Optimization, Social Media Management, or a fully integrated and
                creative digital marketing strategy, SwaPra Technologies has both
                the track record and in-house ability to support your business.
              </Text>
  
              <HStack justify="space-between" width="100%">
                <VStack>
                  <Icon as={FaAward} boxSize={10} color="orange.500" />
                  <Text fontSize="2xl" fontWeight="bold">
                    8+
                  </Text>
                  <Text>Experience</Text>
                </VStack>
                <VStack>
                  <Icon as={FaGlobe} boxSize={10} color="orange.500" />
                  <Text fontSize="2xl" fontWeight="bold">
                    1250+
                  </Text>
                  <Text>Happy Customers</Text>
                </VStack>
                <VStack>
                  <Icon as={FaClock} boxSize={10} color="orange.500" />
                  <Text fontSize="2xl" fontWeight="bold">
                    24/7
                  </Text>
                  <Text>Quick Support</Text>
                </VStack>
              </HStack>
            </VStack>
  
            {/* Images Column */}
            <Box flex="1" position="relative" display="flex" justifyContent="center">
              <Image
                src={aboutImg}
                alt="About Us"
                borderRadius="md"
                boxSize={{ base: "300px", md: "400px" }}
                objectFit="cover"
              />
            </Box>
          </Flex>
  
          <Box textAlign="center" mt={8}>
            <Link
              href="website-design-digital-marketing-company-in-pune.php"
              color="orange.500"
              fontWeight="bold"
              display="inline-flex"
              alignItems="center"
              fontSize="lg"
            >
              Learn More About Company <Icon as={FaLongArrowAltRight} ml={2} />
            </Link>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default About;
  
  