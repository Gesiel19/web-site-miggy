import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/landingPage/LandingPage'
import Book from './components/landingPage/Book'

function App() {
 
  return (
    
   <Routes>
    <Route path='/' element={ <LandingPage /> }/>
    <Route path='/book' element={ <Book /> }/>
   </Routes>
  )
}

export default App
