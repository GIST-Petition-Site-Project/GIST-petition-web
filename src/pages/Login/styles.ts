import styled from '@emotion/styled'
const stackStyle: React.CSSProperties = {
  position: 'absolute',
  top: '300px',
  left: '0',
  right: '0',
  height: '500px',
  width: '400px',
  margin: 'auto',
}

const LoginButton = styled.button`
  color: white;
  background-color: #df3127;
  border-radius: 5px;
  height: 36px;
  font-weight: bold;
`

const ErrorText = styled.p`
  color: red;
`

export { stackStyle, LoginButton, ErrorText }
