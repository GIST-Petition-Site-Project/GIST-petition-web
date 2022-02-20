import styled from '@emotion/styled'
import theme from '../../style/theme'

const FooterContainer = styled.footer`
  height: 4rem;
  background-color: ${theme.color.WHITE};
  width: 100%;
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    margin-right: 1em;
    height: 1.5rem;
    width: auto;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      height: 2rem;
    }
  }
`

// const Inner = styled.div`
//   height: 100%;
//   margin: 0 auto;
//   max-width: ${theme.space.INNER_MAXWIDTH};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 2rem;
// `

const Text = styled.p`
  font-size: 0.6rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 0.8rem;
  } ;
`

export { FooterContainer, Text }
