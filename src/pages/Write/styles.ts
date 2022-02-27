import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.div`
  .inner {
    padding: 0 0.5rem;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      padding: 0 2rem;
    }
    > .chakra-stack {
      position: relative;
      margin: 6rem 0;
      h2 {
        font-size: 20px;
      }
    }
  }
`

const WriteContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 0;
  .write_wrapper {
    margin: 1rem;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      margin: 2rem;
    }
    .principle_section {
      margin: 50px 0;
    }

    .editor_section {
      margin: 60px 0;
      @media screen and (min-width: ${theme.breakpoints.sm}) {
        margin: 60px 18px;
      }
    }
  }
`

export { Container, WriteContainer }
