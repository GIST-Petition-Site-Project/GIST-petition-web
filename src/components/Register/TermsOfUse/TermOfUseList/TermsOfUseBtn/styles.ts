import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled/types/base'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import theme from '../../../../../style/theme'

const TermsOfUseIcon = styled(IoMdArrowDropdownCircle)`
  color: ${theme.color.QUATERNARY_GRAY};
  font-size: 1.3rem;
  cursor: pointer;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.7rem;
  }
`

const AccordionBtn = styled(Button)`
  text-align: center;
  font-size: 1.5rem;
  background-color: transparent;
  padding: 0;
  :hover {
    background-color: transparent;
  }
  :focus {
    background-color: transparent;
    box-shadow: none;
    outline: none;
  }
  :active {
    background-color: transparent;
    outline: none;
  }
`

export { AccordionBtn, TermsOfUseIcon }
