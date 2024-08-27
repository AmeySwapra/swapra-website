import { Box, Image, Text } from "@chakra-ui/react";

function ServicesDetail({ content }) {
  return (
    <Box className="content-side right-sidebar" w={{ lg: "50%", md: "100%", sm: "100%" }}>
      <Box className="services-detail">
        {content.map((item, index) => (
          <Box key={index} className="inner-box" mb={6}>
            <Box className="image" mb={4}>
              <Image src={item.image} alt={`content-image-${index}`} borderRadius="md" />
            </Box>
            {item.text.map((paragraph, pIndex) => (
              <Text key={pIndex} mb={4}>
                {paragraph}
              </Text>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ServicesDetail;
