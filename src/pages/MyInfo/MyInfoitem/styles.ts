import theme from '@style/theme'
import styled from '@emotion/styled'

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

export { List }
