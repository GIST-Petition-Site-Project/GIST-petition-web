import styled from '@emotion/styled'
import theme from '../../style/theme'

const stackStyle: React.CSSProperties = {
  height: '100vh',
  width: '28rem',
  margin: 'auto',
  justifyContent: 'center',
  padding: '0 2rem',
}

const LoginButton = styled.button`
  color: ${theme.color.WHITE};
  background-color: ${theme.color.PRIMARY_RED};
  border-radius: 0.1rem;
  height: 2.25rem;
  font-weight: bold;
`

const ErrorText = styled.p`
  color: ${theme.color.PRIMARY_RED};
`

export { stackStyle, LoginButton, ErrorText }
