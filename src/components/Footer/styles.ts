import styled from '@emotion/styled'
import theme from '@style/theme'

const FooterContainer = styled.footer`
  height: 10rem;
  background-color: ${theme.color.WHITE};
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    height: 6rem;
  }
  .inner {
    display: flex;
    flex-direction: column-reverse;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      flex: 20%;
    }
    .logo {
      width: 139.5px;
      height: 4rem;
      margin: 0 auto;
    }
  }
`

const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  color: ${theme.color.SECOND_Light_GRAY};
  @media screen and (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    font-size: 0.8rem;
    flex: 80%;
    > .teamLink {
      margin-left: 5em;
    }
  }
  > a {
    font-size: 0.8rem;
    margin-bottom: 0.2em;
    > button {
      div {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
      }
      span {
        font-size: 0.8rem;
        margin-right: 0.2em;
      }
    }
  }
  > div {
    width: 17rem;
    div {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
  }
`

export { FooterContainer, Text }
