import styled from '@emotion/styled'
import theme from '../../../style/theme'

const DesktopMenu = styled.div`
  display: none;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    display: block;
  }
  .chakra-menu__menuitem {
    &:hover {
      cursor: pointer;
      background-color: rgba(47, 54, 60, 0.94);
    }
    &:focus {
      outline: 'none';
      background-color: rgba(47, 54, 60, 0.9);
    }
  }
`

const MobileMenu = styled.div`
  display: block;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
  height: 100vh;
`

export { DesktopMenu, MobileMenu }
