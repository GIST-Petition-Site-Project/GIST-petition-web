import styled from '@emotion/styled'
import theme from '../../style/theme'

const Container = styled.div`
  .login_form > .chakra-stack {
    height: 100vh;
    max-width: 28rem;
    margin: auto;
    justify-content: center;
    padding: 0 2rem;

    > span:nth-of-type(1) {
      font-size: 2rem;
      font-weight: bold;
    }

    .chakra-form-control {
      > span {
        display: inline-block;
        margin-bottom: 8px;
      }
      .chakra-input__group {
        border-color: #ccc;
        .chakra-input {
          border-radius: 0;
        }
      }
    }

    .login_btn {
      color: ${theme.color.WHITE};
      background-color: ${theme.color.PRIMARY_RED};
      border-radius: 0.1rem;
      height: 2.25rem;
      font-weight: bold;
    }
    .err_msg {
      color: ${theme.color.PRIMARY_RED};
    }
    .account_link {
      > a {
        text-decoration: underline;
      }
    }
    .forgot_pwd {
      text-align: right;
    }
    .create_acount {
      text-align: center;
    }
  }
`

export { Container }
