import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.png'
const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
    }}
    href={href}>
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isHovering, onOpen: onHoverOpen, onClose: onHoverClose } = useDisclosure();

  return (
    <Box bg="white.100" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <img src={logo} alt="swapra-technologies" width={'150px'}/>
          </Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <Menu isOpen={isHovering}>
              <MenuButton
                as={Link}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ textDecoration: 'none', bg: 'gray.200' }}
                onMouseEnter={onHoverOpen}
                onMouseLeave={onHoverClose}>
                Services
              </MenuButton>
              <MenuList onMouseEnter={onHoverOpen} onMouseLeave={onHoverClose}>
                <MenuItem as="a" href="#web-development">Web Development</MenuItem>
                <MenuItem as="a" href="#app-development">App Development</MenuItem>
                <MenuItem as="a" href="#seo">SEO Services</MenuItem>
                <MenuItem as="a" href="#marketing">Digital Marketing</MenuItem>
              </MenuList>
            </Menu>
            <NavLink href="/career">Careers</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button
            variant={'solid'}
            colorScheme={'red'}
            size={'sm'}
            mr={4}>
            Get Customize Quote
          </Button>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <Menu>
              <MenuButton as={NavLink}>
                Services
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="#web-development">Web Development</MenuItem>
                <MenuItem as="a" href="#app-development">App Development</MenuItem>
                <MenuItem as="a" href="#seo">SEO Services</MenuItem>
                <MenuItem as="a" href="#marketing">Digital Marketing</MenuItem>
              </MenuList>
            </Menu>
            <NavLink href="/contact">Contact</NavLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;














