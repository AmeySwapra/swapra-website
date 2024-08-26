import {
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
    Text,
    Flex,
    VStack,
    Image,
    useBreakpointValue,
    Icon,
  } from "@chakra-ui/react";
  import { FaAward, FaClock } from "react-icons/fa";
  import aboutImg from '../assets/About-img.png';
  
  const AboutCompany = () => {
    const textAlign = useBreakpointValue({ base: "center", md: "left" });
  
    return (
      <Box as="section" py={16}>
        <Container maxW="container.xl">
          <Box textAlign="cen" mb={12}>
            <Text fontSize="md" fontWeight="bold" color="orange.500">
              ABOUT COMPANY
            </Text>
            <Heading as="h2" size="lg" mt={4}>
              You Can not Use Up <br /> Creativity.
            </Heading>
          </Box>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12}>
            <GridItem>
              <VStack align={textAlign} spacing={6}>
                <Text textAlign={textAlign} fontSize="md">
                  We utilize the latest technology to bring results to grow our clients’ business. From Website Design, Search Engine Optimization, Social Media Management or a fully integrated and creative digital marketing strategy, SwaPra Technologies has both the track record and in-house ability to support your business. <br />
                  We are pleased to introduce{" "}
                  <b>
                    <span style={{ color: "#f37020", fontSize: "10px" }}>
                      "S<span style={{ color: "#000" }}>waPra Technologies</span>"
                    </span>
                  </b>{" "}
                  as a leading Web Site Design &amp; Development Company. We have successfully finished a number of Web projects, Web Application, Web site, Digital Marketing, All to Print media &amp; 3D walkthrough. We take immense care about the smallest aspects of the customer requirements and customer requests to understand our valued customers for better user experience. Our primary focus is to help our customer put their application to work by automating business processes that help them meet the needs of their customers.
                </Text>
                <Flex direction="column" spacing={6}>
                  <Box>
                    <Flex align="center">
                      <Icon as={FaAward} boxSize={8} color="orange.500" mr={4} />
                      <VStack align="start" spacing={1}>
                        <Heading as="h6" size="sm">
                          Experience
                        </Heading>
                        <Text fontSize="sm">8+ Years of Experience</Text>
                      </VStack>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex align="center">
                      <Icon as={FaClock} boxSize={8} color="orange.500" mr={4} />
                      <VStack align="start" spacing={1}>
                        <Heading as="h6" size="sm">
                          Quick Support
                        </Heading>
                        <Text fontSize="sm">We’ll help you 24/7 hours.</Text>
                      </VStack>
                    </Flex>
                  </Box>
                </Flex>
              </VStack>
            </GridItem>
            <GridItem>
              <Box
                position="relative"
                height="325px"
                backgroundImage="url('/images/icons/globe.png')"
                backgroundSize="cover"
                backgroundPosition="center"
                borderRadius="md"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex={1}
                  height="100%"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                
                >
                  <Image
                    src={aboutImg}
                    alt="About Image"
                    objectFit="cover"
                    height="100%"
                    width="auto"
                  />
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default AboutCompany;
  
  