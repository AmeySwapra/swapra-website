import {
    Box,
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const jobs = [
    {
      date: "12 Jan",
      title: "Software Developer (Fresher or Experience)",
      qualifications: "BE/B.tech IT/CS, BCA, MCA, BCS, MCS.",
      skills:
        "In full-stack development, proficient in languages such as Python, Java. High commitment and ability to work in a team",
    },
    {
      date: "24 Dec",
      title: "Web Developer (Fresher or Experience)",
      qualifications:
        "B.tech (CS, IT, EC), B.E (CS, IT, EC), B.sc (CS, IT, EC), MCA.",
      skills:
        "Web application development, Web development, Javascript, PHP, HTML5, Bootstrap, CSS, Laravel, MySQL",
    },
    {
      date: "3 Feb",
      title: "Junior Flutter Developer(Fresher)",
      qualifications: "BE / B.tech / BCA / BCS / MCA, Good Communication Skill",
      skills:
        "Dart 2.19, Flutter, Design Patterns, APIs, Javascript, HTML5, Android Studio, Dart, IOS",
    },
    {
      date: "18 Jan",
      title: "Sales Manager - Fresher or Experience 1-2 years",
      qualifications:
        "B.B.A/ B.M.S in Management, Any Graduate, MBA/PGDM With Good Communication Skill",
      skills:
        "Sales And Marketing, Deal Closure, B2B Sales, End To End Sales, End To End, Build Relationship, Salesforce CRM, Enterprise Sales",
    },
    {
      date: "26 Jan",
      title: "Senior Software Developer Java - Fullstack (Immediately)",
      qualifications: "BE/B.tech IT/CS, BCA, MCA, BCS, MCS.",
      skills:
        "Hibernate, Spring Boot, J2EE, Core Java, Microservices, Spring MVC, Javascript, SQL Server, Payment Gateway, Advance Java, JSP, Webservices",
    },
    {
      date: "17 Jan",
      title: "Digital Marketing Executive (Fresher)",
      qualifications: "BE/B.tech IT/CS, BCA, MCA, BCS, MCS.",
      skills:
        "Digital Marketing, Google Analytics, SEO, Online Branding, Online Marketing, Social Media, Marketing Media, Marketing Digital, Branding, Social Media, E-commerce Marketing, Internet Marketing",
    },
  ];
  
  const BlogPageSection = () => {
    return (
      <Box as="section" py={10}>
        <Container maxW="container.xl">
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            autoRows="minmax(300px, auto)" // Ensure uniform row heights
          >
            {jobs.map((job, index) => (
              <GridItem key={index}>
                <Box
                  bg="white"
                  shadow="md"
                  borderRadius="md"
                  p={6}
                  height="100%" // Make sure all cards have the same height
                  display="flex"
                  flexDirection="column" // Ensure content aligns properly
                  justifyContent="space-between"
                  className={`wow ${
                    index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                  } animated`}
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                  }}
                >
                  <VStack align="start" spacing={4} flex="1">
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold" color='red.500'>
                        {job.date.split(" ")[0]}
                      </Text>
                      <Text>{job.date.split(" ")[1]}</Text>
                    </Box>
                    <Heading
                      as="h4"
                      size="md"
                      _hover={{ color: "red.500" }} // Change color on hover
                      transition="color 0.3s" // Smooth transition for color change
                    >
                      {job.title}
                    </Heading>
                    <Text>
                      <Text as="span" fontWeight="bold">
                        Qualification-
                      </Text>{" "}
                      {job.qualifications}
                    </Text>
                    <Text>
                      <Text as="span" fontWeight="bold">
                        Skills-
                      </Text>{" "}
                      {job.skills}
                    </Text>
                  </VStack>
                  <Button
                    colorScheme="teal"
                    variant="solid"
                    mt={4} // Add margin top to space out button
                    alignSelf="flex-start" // Align button to start
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Apply Now
                  </Button>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default BlogPageSection;
  
  
  
  