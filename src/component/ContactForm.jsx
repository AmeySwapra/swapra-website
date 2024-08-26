import { Box, Container, Text, FormControl, FormLabel, Input, Textarea, Button, Stack } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box as="section" className="contact-map-section" py={8} margin='20px'>
      <Container maxW="container.xl" className="auto-container">
        {/* Sec Title */}
        <Box className="sec-title" mb={12} >
          <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
            <Stack spacing={2} flex="1">
              <Text fontSize="lg"color='red' fontWeight="bold">SEND YOUR MESSAGE</Text>
              <Text fontSize="2xl" fontWeight="bold">Send Your Message</Text>
            </Stack>
            <Text flex="1" textAlign={{ base: "center", md: "right" }}>
              Our goal is to help our companies maintain or achieve best-in-class positions in their respective industries and our team works.
            </Text>
          </Stack>
        </Box>

        {/* Contact Form */}
        <Box className="contact-form" bg="gray.50" p={8} borderRadius="md" shadow="md">
          <form method="post" action="mail.php" id="contact-form">
            <Stack spacing={6}>
              <Stack direction={{ base: "column", md: "row" }} spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Your name</FormLabel>
                  <Input type="text" name="username" placeholder="" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="email" placeholder="" />
                </FormControl>
              </Stack>

              <Stack direction={{ base: "column", md: "row" }} spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Phone number</FormLabel>
                  <Input type="tel" name="phone" placeholder="" />
                </FormControl>
                <FormControl>
                  <FormLabel>Subject</FormLabel>
                  <Input type="text" name="subject" placeholder="" />
                </FormControl>
              </Stack>

              <FormControl isRequired>
                <FormLabel>Your Message</FormLabel>
                <Textarea name="message" placeholder="" />
              </FormControl>

              <Button colorScheme="blue" type="submit" alignSelf="center">Send Now</Button>
            </Stack>
          </form>
        </Box>
        {/* End Contact Form */}
      </Container>
    </Box>
  );
};

export default ContactForm;
