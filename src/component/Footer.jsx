'use client'

import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png'


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg="radial-gradient(circle farthest-corner at center center, #0060ff 0%, #131E3C 100%)"
      color={useColorModeValue('white')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Our Pages</ListHeader>
            <Box as="a" href={'/'}>
              Home
            </Box>
            <Box as="a" href={'/about'}>
              About Us
            </Box>
            <Box as="a" href={'#'}>
              Request for Quote
            </Box>
            <Box as="a" href={'/career'}>
              Career
            </Box>
            <Box as="a" href={'/contact'}>
              Contact Us
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Box as="a" href={'/web-development'}>
              Web Development
            </Box>
            <Box as="a" href={'/app-development'}>
              Software Development
            </Box>
            <Box as="a" href={'/digital-marketing'}>
              Digital Marketing
            </Box>
            <Box as="a" href={'/seo'}>
              Search Engine Optimaztion
            </Box>
            <Box as="a" href={'/app-development'}>
              Mobile App Development
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
           
            <Box as="a" href={'/privacy'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'/terms-condition'}>
              Terms of Service
            </Box>
            
          </Stack>

          <Stack align={'flex-start'}>
            <Image src={logo}  alt='Swapra-logo' width='200px' />
            <Text>A Leading Website Development & Digital Marketing Company Providing one stop solution for all your business needs !!</Text> 
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© Website Design-Development and Maintenance by Swapra Technologies</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
