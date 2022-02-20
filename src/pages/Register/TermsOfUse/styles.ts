import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { Collapse, Button, Box, IconButton, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../../../style/theme'

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

const TermsOfUseCollapse = styled(Collapse)`
  padding: 0.5em 1em;
`

export {
  TermsOfUseCollapse,
  TermsOfUseCheckIcon,
  TermsOfUseIcon,
  List,
  TermsOfUseCheckFlex,
  TermsOfUseBtn,
  TermsOfUseTotalBox,
}
