import { Box, Heading, Text, Link, SimpleGrid, Stack, Icon } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <Box bg="gray.100" py={16}>
      <Box maxW="1200px" mx="auto" px={4}>
        {/* Title Box */}
        <Box textAlign="center" mb={12}>
          <Text fontSize="md" color="red.500" fontWeight="bold">GET IN TOUCH</Text>
          <Heading as="h2" size="lg" mt={2} mb={4}>
            A Monthly Project Fee <br /> Price Plans
          </Heading>
          <Text color="gray.600">
            For general inquiries, you can get in touch with our front desk support team<br /> at{' '}
            <Link href="mailto:swapratechnologies@gmail.com" color="red.500">
              swapratechnologies@gmail.com
            </Link>{' '}
            or call on{' '}
            <Link href="tel:+91 878 886 4318" color="red.500">
              +91 878 886 4318
            </Link>.
          </Text>
        </Box>

        {/* Info Columns */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Stack spacing={4} align="center" textAlign="center">
            <Icon as={FaMapMarkerAlt} boxSize={6} color="red.500" />
            <Text fontSize="md" fontWeight="bold">Address</Text>
            <Text color="gray.600">
              Neeta Tower 1st Floor Above Amantran Hotel, Mumbai Pune Highway, Phugewadi, Pune - Maharashtra 411012
            </Text>
          </Stack>

          <Stack spacing={2} align="center" textAlign="center">
            <Icon as={FaPhoneAlt} boxSize={6} color="red.500" />
            <Text fontSize="md" fontWeight="bold">Phone</Text>
            <Text color="gray.600">+91 878 886 4318</Text>
            <Text color="gray.600">+91 989 065 5874</Text>
          </Stack>

          <Stack spacing={2} align="center" textAlign="center">
            <Icon as={FaEnvelope} boxSize={6} color="red.500" />
            <Text fontSize="md" fontWeight="bold">E-Mail</Text>
            <Text color="gray.600">info@swapratechnologies.com</Text>
            <Text color="gray.600">swapratechnologies@gmail.com</Text>
          </Stack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ContactDetails;


