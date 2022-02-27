import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.section`
  .changeUserInfo_form > .chakra-stack {
    height: 100vh;
    max-width: 28rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    padding: 0 2rem;
    > .changeUserInfo_section {
      margin-bottom: 3em;
      > .title {
        font-size: 2rem;
        font-weight: bold;
      }
      > .chakra-form-control {
        > p {
          display: inline-block;
          margin-bottom: 0.5em;
        }
        > .chakra-input__group {
          border-color: #ccc;
          margin-bottom: 0.5em;
          .chakra-input {
            border-radius: 0;
          }
          .chakra-input__right-element {
            .chakra-button {
              :focus {
                box-shadow: none;
              }
            }
          }
        }
      }
      > .submit__btn {
        display: block;
        width: 100%;
        margin-bottom: 1em;
      }
      > .err_msg {
        text-align: center;
        color: ${theme.color.PRIMARY_RED};
      }
    }
  }
`
const RegisterButton = styled.button`
  color: ${theme.color.WHITE};
  background-color: ${theme.color.TERTIARY_GRAY};
  border-radius: 0.1rem;
  height: 2.25rem;
  font-weight: bold;
`

const WithdrawalButton = styled(RegisterButton)`
  background-color: ${theme.color.PRIMARY_RED};
`

export { Container, RegisterButton, WithdrawalButton }
