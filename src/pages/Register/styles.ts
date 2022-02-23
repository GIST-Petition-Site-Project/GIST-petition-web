import { Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../../style/theme'

const RegisterStack = styled(Stack)`
  position: absolute;
  top: 10rem;
  left: 0;
  right: 0;
  width: 70%;
  max-width: 30em;
  margin: auto;
`

const Title = styled(Text)`
  font-size: 2.2rem;
  font-weight: bold;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 2.3rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    font-size: 2.5rem;
  }
`

const RegisterButton = styled.button`
  color: ${theme.color.WHITE};
  background-color: ${theme.color.TERTIARY_GRAY};
  border-radius: 0.1rem;
  height: 2.25rem;
  font-weight: bold;
`

const ErrorText = styled.p`
  margin-top: 2em;
  text-align: center;
  color: ${theme.color.PRIMARY_RED};
`
const DeleteBtn = styled.button`
  position: absolute;
  top: 1em;
  right: 0;
  width: 10%;
  color: ${theme.color.WHITE};
  background-color: ${theme.color.TERTIARY_GRAY};
  border-radius: 0.1rem;
  height: 2.25rem;
  font-weight: bold;
`

export { RegisterStack, Title, RegisterButton, ErrorText, DeleteBtn }
