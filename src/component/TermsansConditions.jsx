import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const TermsAndConditions = () => {
  return (
    <Box bg="gray.100" p={8} borderRadius="md" boxShadow="md">
      <VStack spacing={4} align="start">
        <Heading as="h1" size="lg" mb={4}>
          Terms and Conditions for Swapra Technologies
        </Heading>

        <Text fontWeight="bold">1. Introduction</Text>
        <Text>
          Welcome to Swapra Technologies. These Terms and Conditions outline the
          rules and regulations for the use of our services.
        </Text>

        <Text fontWeight="bold">2. Intellectual Property Rights</Text>
        <Text>
          All content provided by Swapra Technologies, including software,
          designs, and logos, are owned by Swapra Technologies and are protected
          by applicable intellectual property laws.
        </Text>

        <Text fontWeight="bold">3. User Responsibilities</Text>
        <Text>
          By using our services, you agree to use them only for lawful purposes.
          You must not use our services in any way that may cause harm to the
          company or its services.
        </Text>

        <Text fontWeight="bold">4. Limitation of Liability</Text>
        <Text>
          Swapra Technologies shall not be held liable for any damages arising
          from the use or inability to use our services.
        </Text>

        <Text fontWeight="bold">5. Changes to Terms</Text>
        <Text>
          Swapra Technologies reserves the right to modify these terms at any
          time. Any changes will be communicated to users through appropriate
          channels.
        </Text>

        <Text fontWeight="bold">6. Governing Law</Text>
        <Text>
          These terms shall be governed by and construed in accordance with the
          laws of the jurisdiction in which Swapra Technologies operates.
        </Text>

        <Text fontWeight="bold">7. Contact Us</Text>
        <Text>
          For any questions regarding these terms, please contact us at
          [email@example.com].
        </Text>
      </VStack>
    </Box>
  );
};

export default TermsAndConditions;
