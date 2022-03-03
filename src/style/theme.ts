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
  SECOND_Light_GRAY: '#8a8a8a',
  BLACK: '#333333',
  WHITE: '#FFFFFF',
}

const size = {
  LOGO_SIZE: '8rem',
  PAGINATION_WIDTH: '5.75rem',
  BUTTON_HEIGHT: '2.4rem',
}

const space = {
  INNER_MAXWIDTH: '60rem',
  INNER_PADDING: '2rem',
  BUTTON_INNER_MAXWIDTH: '60rem',
}

const breakpoints = createBreakpoints({
  sm: '650px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  xxl: '1536px',
})

const theme = extendTheme({
  fontSize,
  fontWeight,
  color,
  size,
  space,
  breakpoints,
  components: {
    Alert: {
      variants: {
        toast: {
          container: {
            color: `${color.WHITE}`,
            position: 'absolute',
            top: '100px',
            backgroundColor: `${color.PRIMARY_RED}`,
          },
        },
      },
    },
  },
})

export default theme
