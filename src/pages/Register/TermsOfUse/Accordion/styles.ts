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
    .chakra-accordion__panel {
      line-height: 1.2em;
      margin-top: 1rem;
      padding: 0;
      overflow: scroll;
      max-height: 22rem;
      color: #555;
      .subheading {
        font-weight: bold;
      }
      .contents {
        margin-bottom: 1rem;
        .indentation {
          margin-left: 0.7em;
        }
      }
      li:nth-of-type(4) > div.contents {
        margin-bottom: 0;
      }
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
    border: 0;
    color: ${theme.color.WHITE};
    background-color: ${theme.color.SECONDARY_RED};
    :hover {
      background-color: ${theme.color.SECONDARY_RED};
    }
  `}
  min-width: 1.3rem;
  height: 1.3rem;
  font-size: 0.8rem;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 0.9rem;
    min-width: 1.4rem;
    height: 1.4rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 1rem;
    min-width: 1.6rem;
    height: 1.6rem;
  }
`

export { Container, TermsOfUseCheckIcon }
