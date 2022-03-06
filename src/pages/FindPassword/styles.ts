import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.section`
  .register_form > .chakra-stack {
    height: 100vh;
    max-width: 28rem;
    margin: auto;
    justify-content: center;
    padding: 0 2rem;

    > span:nth-of-type(1) {
      font-size: 2rem;
      font-weight: bold;
    }
    .chakra-button {
      :focus {
        box-shadow: none;
      }
    }
    .err_msg {
      text-align: center;
      color: ${theme.color.PRIMARY_RED};
    }
  }
`
const FindPasswordBtn = styled.button`
  color: ${theme.color.WHITE};
  background-color: ${theme.color.TERTIARY_GRAY};
  border-radius: 0.1rem;
  height: 2.25rem;
  font-weight: bold;
`

export { Container, FindPasswordBtn }
