import { Box, Container } from "@chakra-ui/react";

const ContactMap = () => {
  return (
    <Box as="section" className="contact-map-section">
      <Container maxW="container.xl" className="auto-container">
        {/* Map Boxed */}
        <Box className="map-boxed">
          {/* Map Outer */}
          <Box className="map-outer" position="relative" overflow="hidden" margin='20px'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.7935456134037!2d73.83005152736946!3d18.592645195438728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8a36077e459%3A0xea314fdc17fa25f7!2sHotel%20Amantran%20Pure%20Veg!5e0!3m2!1sen!2sin!4v1707395606190!5m2!1sen!2sin"
              width="100%"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMap;
