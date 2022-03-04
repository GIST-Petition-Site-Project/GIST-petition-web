import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.section`
  .chakra-stack {
    height: 100vh;
    max-width: 28rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    padding: 0 2rem;
    > .title {
      font-size: 2rem;
      font-weight: bold;
    }
    > .my_info_list {
      margin-top: 2em;
    }
  }
`

const List = styled.li`
  border: 2px solid ${theme.color.LIGHT_GRAY};
  margin-bottom: 0.5em;
  padding: 0.5em 0;
  text-align: left;
  a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.6em;
    font-size: 1rem;

    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: 1.3rem;
      height: 100%;
    }
    > .text {
      flex-basis: 60%;
    }
    > .button {
      text-align: right;

      display: block;
      background-color: transparent;
      :focus {
        box-shadow: none;
      }
      :active {
        background-color: transparent;
      }
      :hover {
        background-color: transparent;
      }
    }
  }
`

export { Container, List }
