import theme from '@style/theme'
import styled from '@emotion/styled'

const List = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em 0;
  text-align: center;
  border: 2px solid ${theme.color.LIGHT_GRAY};
  font-size: 1.3rem;
  margin-bottom: 0.5em;
  > .text {
    flex-basis: 60%;
  }
  > .button {
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
`

export { List }
