import { MenuItem } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../../../style/theme'

const DesktopMenu = styled.div`
  display: none;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    display: block;
  }
`
const MobileMenu = styled.div`
  display: block;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`
const MenuContent = styled(MenuItem)`
  &:hover {
    cursor: pointer;
    background-color: rgba(47, 54, 60, 0.94);
  }
  &:focus {
    outline: 'none';
    background-color: rgba(47, 54, 60, 0.9);
  }
`

export { DesktopMenu, MobileMenu, MenuContent }
