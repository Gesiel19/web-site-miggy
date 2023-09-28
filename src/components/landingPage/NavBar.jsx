import React from 'react';
import { Flex, Box, Text, Link } from '@chakra-ui/react';
import './style.css'

const NavBar = () => {
  return (
    <Flex
    as="nav"
    align="center"
    justify="center"
    padding="1rem"
  >
    <Box display="flex" gap="90px" fontSize="5xl" color="#A97535" className='containerLinks'>
      <Link mr={4} href="#">Book</Link>
      <Link mr={4} href="#">Contact</Link>
      <Link href="#">Shop</Link>
    </Box>
  </Flex>
  )
}

export default NavBar