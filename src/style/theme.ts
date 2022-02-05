import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fontSize = {}

const fontWeight = {}

const color = {
  primaryRed: '#DF3127',
  secondaryRed: '#DD433B',
  primaryGray: '#2F363C',
  secondaryGray: '#384046',
  tertiaryGray: '#5A5E5D',
  quaternaryGray: '#616463',
  ligthGray: '#ccc',
  black: '#333333',
  white: '#fff',
}

const size = {
  logoSize: '8rem',
  paginationWidth: '5.75rem',
}

const space = {
  innerMaxWidth: '56.25rem',
}

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
})

const theme = extendTheme({
  fontSize,
  fontWeight,
  color,
  size,
  space,
  breakpoints,
})

export default theme
