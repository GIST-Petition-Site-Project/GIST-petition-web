import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../../../style/theme'

const TermsOfUseBox = styled(Box)`
  margin-left: 0.9em;
  font-size: 1rem;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.3rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.2rem;
  }
`

export { TermsOfUseBox }
