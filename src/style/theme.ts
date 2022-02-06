import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fontSize = {}

const fontWeight = {}

const color = {
  PRIMARY_RED: '#DF3127',
  SECONDARY_RED: '#DD433B',
  PRIMARY_GRAY: '#2F363C',
  SECONDARY_GRAY: '#384046',
  TERTIARY_GRAY: '#5A5E5D',
  QUATERNARY_GRAY: '#616463',
  LIGHT_GRAY: '#ccc',
  BLACK: '#333333',
  WHITE: '#fff',
}

const size = {
  LOGO_SIZE: '8rem',
  PAGINATION_WIDTH: '5.75rem',
}

const space = {
  INNER_MAXWIDTH: '56.25rem',
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
