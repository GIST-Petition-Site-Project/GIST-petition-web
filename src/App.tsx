// import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import RootRouter from './route/RootRouter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import GlobalStyle from './style/Global'
import { useDispatch } from 'react-redux'
import { setLogin, setLogout } from './redux/auth/authSlice'
import { getUsersMe } from './utils/api'
import { ThemeProvider } from '@emotion/react'
import theme from './style/theme'

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
  isSessionValid()
  return (
    <ChakraProvider>
      <GlobalStyle />
      <div style={{ minHeight: '100vh' }}>
        <ThemeProvider theme={theme}></ThemeProvider>
        <NavBar />
        <Footer />
        <RootRouter />
      </div>
    </ChakraProvider>
  )
}

export default App
