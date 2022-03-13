import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.div`
  .inner {
    padding: 0 0.5rem;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      padding: 0 2rem;
    }

    .petition_wrap {
      position: relative;
      margin: 6rem 0 50px 0;
      padding: 0 1rem 30px;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        border: 1px solid #ccc;
        padding: 50px 30px;
      }
    }
  }
`

export { Container }
