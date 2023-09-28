import React from 'react';
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import daimond from '../../assets/icon-daimond.png';
import logo from '../../assets/logoMiggy.png';
import centralImage from '../../assets/img-center.png';
import drIcon from '../../assets/icon-dr.png';
import panel from '../../assets/panel.png';
import panelRight from '../../assets/panel-right.png';
import iconInstg from '../../assets/icon-ig.png';
import iconWhats from '../../assets/icon-ws.png';
import iconUbic from '../../assets/icon-ubi.png';
import miggyBg from '../../assets/BG-miggy.svg';
import mouth from '../../assets/mouth.png';
import nails from '../../assets/nails.png';
import eyes from '../../assets/eyes.png';
import iconBook from '../../assets/iconBook.png';
import NavBar from './NavBar'
import './style.css'

const LandingPage = () => {
  const icon = [iconInstg, iconUbic, iconWhats]
  const services = ["Eyebrows", "Facial", "Eyelash Extension", "Nails", "Make Up", "Massages", "Eyebrows Training", "Waxing"]
  const imgs = [eyes, mouth, nails]
  return (
    <Box className='container-landing' justifyContent='center'
    w="100%"
    h="auto"
    bgImage={`url(${miggyBg})`}
    bgSize="cover"
    bgRepeat="no-repeat"
  >
    <Box display='flex' alignItems='center' gap='200px' p='5' h="300">
    <Image
        src={daimond}
        alt="Daimond"
        w={300} 
        h={280}
      />
         <Image 
        src={logo}
        alt=""
        w={400} 
        h={400} 
      />
    </Box>
    <Text fontSize='4xl' textAlign='center' color="#ADA275" className='textBellas' >BELLAS FOREVER</Text>
    <NavBar />
    <Box display='flex'alignItems='center' justifyContent='space-between' p='5'>
    <Image
        src={centralImage}
        alt=""
        w={400} 
        h={450}
        ml='450'
        objectFit='cover'
      />
         <Image 
        src={drIcon}
        alt=""
        w={300} 
        h={250}
        mt="70" 
      />
    </Box>
    <Flex>
  <Box flex='1' mt={20} className='containerServices'>
  {
    services.map((item =>
      <Box
      w={400} 
      h={50} 
      mt={4}
      bg="blue"
      pt={2}
      textAlign="center"
      color= "#422A2A"
      fontWeight="500"
      borderRightRadius={50}
      background= "linear-gradient(0deg, rgba(162,109,41), rgba(250,241,164), rgba(184,140,51), rgba(201,166,76))"
      _hover={{
        cursor: "pointer",
       boxShadow: "inset 400px 0 0 0 rgba(201,166,76)"
      }}

      >{item}</Box>
      ))
   }
  </Box>
  <Box flex='1' mt={20} display="flex" flexDirection="column" alignItems="center">
  {
    imgs.map((item =>
      <Image 
      src={item}
      w={170} 
      h={170} 
     mt={2}
     _hover={{
      opacity:"0.5",
      cursor: "pointer"
     }}
     
    />
      ))
   }
  </Box>
  </Flex>
<Box display="flex" flex='1' justifyContent='center' p={10}>
  <Button className='btn-Book'
  mr={100}
  w={250}
  color= "#422A2A"
  borderRightRadius={50}
  background= "linear-gradient(0deg, rgba(162,109,41), rgba(250,241,164), rgba(184,140,51), rgba(201,166,76))"
      _hover={{
        cursor: "pointer",
       boxShadow: "inset 400px 0 0 0  rgba(201,166,76)",
       color: "white"
      }}
  ><img  src={iconBook} alt="" width="50px" />Book</Button>
   {
    icon.map((item =>
      
      <Image 
      src={item}
      w={50} 
      h={50} 
      ml={10}
      _hover={{
        cursor: "pointer",
       boxShadow: "inset 400px 0 0 0 rgba(184,140,51)",
       borderRadius: "20px",
      }}
     
    />
      ))
   }
  </Box>
    </Box>
  )
}

export default LandingPage