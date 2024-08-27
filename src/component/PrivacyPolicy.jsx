import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Privacy Policy
      </Heading>
      <VStack align="start" spacing={6}>
        <Text>
          At Swapra technologies, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website. Please read this Privacy
          Policy carefully. If you do not agree with the terms of this Privacy
          Policy, please do not access the site.
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          Information We Collect
        </Heading>
        <Text>
          We may collect information about you in a variety of ways. The
          information we may collect on the Site includes personal data, such as
          your name, email address, and demographic information.
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          Use of Your Information
        </Heading>
        <Text>
          We may use information collected about you via the Site to send you
          emails, create and manage your account, deliver targeted advertising,
          and improve our website.
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          Disclosure of Your Information
        </Heading>
        <Text>
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows: by law or to
          comply with legal obligations, with third-party service providers, or
          in connection with a business transfer.
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          Contact Us
        </Heading>
        <Text>
          If you have questions or comments about this Privacy Policy, please
          contact us at: swapratechnologies@gmail.com
        </Text>
      </VStack>
    </Box>
  );
};

export default PrivacyPolicy;
