import styled from '@emotion/styled'
import theme from '@style/theme'

const FooterContainer = styled.footer`
  height: 4rem;
  background-color: ${theme.color.WHITE};
  width: 100%;
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      height: 4rem;
      margin-right: 0.5em;
    }
  }
`

const Text = styled.p`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 0.8rem;
  }
  > a {
    font-size: 0.8rem;
    margin-bottom: 0.2em;
    > button {
      display: flex;
      align-items: center;
      font-size: 1.1rem;
      > span {
        font-size: 0.8rem;
        margin-right: 0.2em;
      }
    }
  }
  > span {
    font-size: 0.8rem;
    margin-bottom: 0.2em;
  }
`

export { FooterContainer, Text }
