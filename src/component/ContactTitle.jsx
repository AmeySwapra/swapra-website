import { Box, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

const ContactTitle = ({title}) => {
  return (
    <Box position="relative" bg="#141d38" py={10}>
      {/* Background pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('/images/background/pattern-16.png')"
        bgSize="cover"
        bgRepeat="no-repeat"
        zIndex={-1}
      />

      {/* Container */}
      <Box maxW="1200px" mx="auto" px={4} textAlign="center">
        <Heading as="h2" size="2xl" mb={4} color="white" textTransform='uppercase'>
          {title}
        </Heading>

        <Box display="flex" justifyContent="center">
          <Breadcrumb spacing="8px" separator=":" color="white">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactTitle;
