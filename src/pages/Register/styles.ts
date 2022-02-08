import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../../style/theme'

const stackStyle: React.CSSProperties = {
  position: 'absolute',
  top: '18.75rem',
  left: '0',
  right: '0',
  height: '31.25rem',
  width: '25rem',
  margin: 'auto',
}

const RegisterButton = styled.button`
  color: ${theme.color.white};
  background-color: ${theme.color.tertiaryGray};
  border-radius: 0.1rem;
  height: 2.25rem;
  font-weight: bold;
`
const ErrorText = styled.p`
  color: ${theme.color.primaryRed};
`

export { stackStyle, RegisterButton, ErrorText }
