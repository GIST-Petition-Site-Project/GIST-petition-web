import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { Box, IconButton, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../../../../style/theme'

const List = styled.li`
  display: flex;
  /* padding-top: 1em; */
  flex-direction: column;
`
const TermsOfUseCheckFlex = styled(Flex)`
  padding: 1em;
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
  width: 1.4rem;
  height: 1.4rem;
  font-size: 1rem;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
    width: 1.6rem;
    height: 1.6rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.2rem;
    width: 1.8rem;
    height: 1.8rem;
  }
`

const TermsOfUseTotalBox = styled(Box)`
  margin-left: 1rem;
  font-weight: bold;
  font-size: 1rem;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.3rem;
  }
`

export { TermsOfUseCheckIcon, List, TermsOfUseCheckFlex, TermsOfUseTotalBox }
