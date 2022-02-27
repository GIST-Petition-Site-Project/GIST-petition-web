import styled from '@emotion/styled'
import { IconButton } from '@chakra-ui/react'
import theme from '@style/theme'

const Container = styled.div`
  .chakra-accordion__item {
    padding: 1em 1em;
    font-size: 1rem;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: 1.2rem;
    }
    @media screen and (min-width: ${theme.breakpoints.lg}) {
      font-size: 1.3rem;
    }
    @media screen and (min-width: ${theme.breakpoints.xl}) {
      font-size: 1.2rem;
    }
  }
  .btn_wrapper {
    display: flex;
    align-items: center;

    .chakra-accordion__button {
      padding: 0 0 0 1rem;
      font-size: 1rem;
      display: flex;
      justify-content: space-between;
      :focus {
        box-shadow: none;
      }
      :hover {
        background-color: transparent;
      }
      @media screen and (min-width: ${theme.breakpoints.md}) {
        font-size: 1.2rem;
      }
      @media screen and (min-width: ${theme.breakpoints.lg}) {
        font-size: 1.3rem;
      }
    }
  }
`

const TermsOfUseCheckIcon = styled(IconButton)`
  border-radius: 50%;
  border: 2px solid ${theme.color.LIGHT_GRAY};
  background-color: ${theme.color.WHITE};
  color: ${theme.color.LIGHT_GRAY};

  :focus {
    box-shadow: none;
  }
  :hover {
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
    :hover {
    color: ${theme.color.WHITE};
    background-color: ${theme.color.SECONDARY_RED};
    }
  `}
  min-width: 1.4rem;
  height: 1.4rem;
  font-size: 1rem;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
    min-width: 1.6rem;
    height: 1.6rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.2rem;
    min-width: 1.8rem;
    height: 1.8rem;
  }
`

export { Container, TermsOfUseCheckIcon }
