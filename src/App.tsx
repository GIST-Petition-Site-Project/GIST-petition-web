import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import RootRouter from './route/RootRouter'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavBar />
        <RootRouter />
        <Footer />
      </div>
    </ChakraProvider>
  )
}

export default App
