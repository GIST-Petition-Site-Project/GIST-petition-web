import styled from '@emotion/styled'
import { AccordionButton, AccordionItem, IconButton } from '@chakra-ui/react'
import theme from '../../../style/theme'
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
    font-size: 1.1rem;
    width: 1.9rem;
    height: 1.9rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.2rem;
    width: 2.1rem;
    height: 2.1rem;
  }
`

const Item = styled(AccordionItem)`
  padding: 0.5em 1em;
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
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`

const AccordionBtn = styled(AccordionButton)`
  font-size: 1rem;
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

export { TermsOfUseCheckIcon, Item, BtnContainer, AccordionBtn }
