// import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import RootRouter from './route/RootRouter'
import NavBar from './components/NavBar'
// import Footer from './components/Footer'
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
      <div
        className="App"
        style={{
          position: 'relative',
          display: 'block',
          margin: '0 auto',
          background: `${theme.color.white}`,
          minHeight: '1000px',
        }}
      >
        <GlobalStyle />
        <ThemeProvider theme={theme}></ThemeProvider>
        {/*css reset*/}
        <NavBar />
        {/* <Footer /> */}
        <RootRouter />
      </div>
      {/* <Footer /> */}
    </ChakraProvider>
  )
}

export default App
