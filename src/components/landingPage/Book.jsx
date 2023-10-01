import React, { useState } from 'react'
import { Box, Button, Image, Select, Text } from '@chakra-ui/react'
import miggyBg from '../../assets/BG-miggy.svg';
import logo from '../../assets/logoMiggy.png';
import campus from '../../assets/campus.png';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './style.css'
import Calendar from 'react-calendar';


const Book = () => {

const [fecha, setFecha] = useState(new Date())
const [minFecha, setMinFecha] = useState(new Date())

 const style = () =>[
  {
    backgroundColor: 'red'
  }
 ]
const onChange = (fecha) =>{
alert(fecha)
setFecha(fecha)
}
  
  return (
    <Box justifyContent='center'
      w="100%"
      h="auto"
      bgImage={`url(${miggyBg})`}
      bgSize="cover"
      bgRepeat="no-repeat"
    padding="40px"
    >
      <Box display='flex' gap={8} alignItems='center'>
        <Image src='https://cdn-icons-png.flaticon.com/512/6681/6681204.png'
          w={50}
          h={50} />
        <Image
          src={logo}
          alt=""
          w={120}
          h={120}
        />
      </Box>
      <Box display='flex' flexDirection='column' gap={6}>
        <Text  color= "#422A2A" fontWeight="600" fontSize='1.5rem'>Make your reservation in this space</Text>
        <Text fontWeight="600" fontSize='1.5rem'>Appointments 60 minutes</Text>
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center' gap='20px' marginTop='30px'>
        <Text className='containerLinks' fontSize='2.3rem'>Select the appointment time</Text>
        <ReactDatePicker 
        selected={fecha}
        onChange={(fecha) => onChange(fecha)}
        minDate={minFecha}
        inline
       calendarClassName='myDatePicker'

        />
        <Box display='flex' alignItems='center' gap='15px'>
         <span>🕗</span> 
         <Select border='none' fontWeight='600'>
  <option value='option1'>8:00 am</option>
  <option value='option2'>9:00 am</option>
  <option value='option3'>10:00 am</option>
</Select>
</Box>
<Box display='flex'  gap='5px'>
<Image
          src={campus}
          alt=""
          w={10}
          h={10}
        />
 <Select border='none' fontWeight='600'>
  <option value='option1'>Campus 1</option>
  <option value='option2'>Campus 2</option>
</Select>
        </Box>
      </Box>
      <Box width='70%' display='flex' justifyContent='flex-end'>
      <Button backgroundColor='transparent' fontWeight='600'>Send</Button>
      </Box>
      
      {/* <Box width='300px'>
      <Calendar

        />
      </Box> */}
      
    </Box>
  )
}

export default Book