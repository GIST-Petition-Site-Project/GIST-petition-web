import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.div`
  .inner {
    padding: 0 0.5rem;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      padding: 0 2rem;
    }
  }
`
const PetitionWrapper = styled.div`
  border: 1px solid #ccc;
  position: relative;
  margin: 6rem 0 50px 0;
  padding: 30px 10px;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    padding: 50px 30px;
  }
`

export { Container, PetitionWrapper }
