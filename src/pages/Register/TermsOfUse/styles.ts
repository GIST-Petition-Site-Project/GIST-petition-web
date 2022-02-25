<<<<<<< HEAD
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { Collapse, Button, Box, IconButton, Flex } from '@chakra-ui/react'
=======
import { Box } from '@chakra-ui/react'
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
import styled from '@emotion/styled'
import theme from '@style/theme'

<<<<<<< HEAD
const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`
const TermsOfUseCheckFlex = styled(Flex)`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const TermsOfUseCheckIcon = styled(IconButton)`
  border-radius: 50%;
  border: 2px solid ${theme.color.LIGHT_GRAY};
  background-color: ${theme.color.WHITE};
  color: ${theme.color.LIGHT_GRAY};
  :focus {
    box-shadow: none;
    background-color: transparent;
  }
  :active {
    box-shadow: none;
    background-color: transparent;
  }
  :hover {
    box-shadow: none;
    background-color: transparent;
  }
  ${props =>
    props.isclicked === 'true' &&
    `
    box-shadow: none;
    color: ${theme.color.WHITE};
    background-color: ${theme.color.SECONDARY_RED};
    :focus {
      box-shadow: none;
    color: ${theme.color.WHITE};
    background-color: ${theme.color.SECONDARY_RED};
    }
    :active {
      box-shadow: none;
    color: ${theme.color.WHITE};
    background-color: ${theme.color.SECONDARY_RED};
    }
    :hover {
      box-shadow: none;
    color: ${theme.color.WHITE};
    background-color: ${theme.color.SECONDARY_RED};
    `}
`

const TermsOfUseTotalBox = styled(Box)`
  font-size: 1.3rem;
  font-weight: bold;
`

const TermsOfUseIcon = styled(IoMdArrowDropdownCircle)`
  color: ${theme.color.QUATERNARY_GRAY};
  font-size: 1.5rem;
  cursor: pointer;
`

const TermsOfUseBtn = styled(Button)`
  text-align: center;
  font-size: 1.5rem;
  background-color: transparent;
  padding: 0;
  :hover {
    background-color: transparent;
=======
const TermsOfUseBox = styled(Box)`
  margin-left: 0.9em;
  font-size: 1rem;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.3rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.2rem;
  }
`

export { TermsOfUseBox }
