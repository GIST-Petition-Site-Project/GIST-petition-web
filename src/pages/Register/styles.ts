import styled from '@emotion/styled'
import theme from '../../style/theme'

const stackStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10rem',
  left: '0',
  right: '0',
  height: '31.25rem',
  width: '25rem',
  margin: 'auto',
}

const RegisterButton = styled.button`
  color: ${theme.color.WHITE};
  background-color: ${theme.color.TERTIARY_GRAY};
  border-radius: 0.1rem;
  height: 2.25rem;
  font-weight: bold;
`
const ErrorText = styled.p`
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

export { stackStyle, RegisterButton, ErrorText, DeleteBtn }
