import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { Box, IconButton, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../../../style/theme'

const List = styled.li`
  display: flex;
  padding-top: 1em;
  flex-direction: column;
`
const TermsOfUseCheckFlex = styled(Flex)`
  padding: 1em 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const TermsOfUseCheckIcon = styled(IconButton)`
  border-radius: 50%;
  border: 2px solid ${theme.color.LIGHT_GRAY};
  background-color: ${theme.color.WHITE};
  color: ${theme.color.LIGHT_GRAY};
  min-width: 1rem;
  width: 1.6rem;
  height: 1.6rem;
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
    }
  `}
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
    width: 1.8rem;
    height: 1.8rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.2rem;
    width: 2.1rem;
    height: 2.1rem;
  }
`

const TermsOfUseTotalBox = styled(Box)`
  margin-left: 0.6em;
  font-size: 1.3rem;
  font-weight: bold;
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
export {
  TermsOfUseCheckIcon,
  List,
  TermsOfUseCheckFlex,
  TermsOfUseTotalBox,
  TermsOfUseBox,
  TermsOfUseIcon,
}
