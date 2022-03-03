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

export { Container }
