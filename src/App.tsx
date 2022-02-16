// import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import RootRouter from './route/RootRouter'
import GlobalStyle from './style/Global'
import { useDispatch } from 'react-redux'
import { setLogin, setLogout } from './redux/auth/authSlice'
import { getUsersMe } from './utils/api'
import theme from './style/theme'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useEffect } from 'react'

const App = (): JSX.Element => {
  const dispatch = useDispatch()
  const isSessionValid = async () => {
    try {
      const status = await getUsersMe()
      if (status < 400) {
        dispatch(setLogin())
      } else {
        dispatch(setLogout())
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isSessionValid()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <RootRouter />
      <Footer />
    </ChakraProvider>
  )
}

export default App
