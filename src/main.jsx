import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.jsx'
import LandingPage from './components/landingPage/LandingPage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  {/* <App /> */}
  <LandingPage />
</ChakraProvider>,
)
