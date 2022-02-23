import styled from '@emotion/styled'
import theme from '@style/theme'
import { Button, List } from '@chakra-ui/react'

const Header = styled.header`
  backdrop-filter: blur(1.5px);

  height: 3.75rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: rgba(47, 54, 60, 0.9);
  //#384046, rgba로 opacity를 먹여야 children 요소가 투명해지지 않습니다.
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-direction: column;
    padding: 0;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.space.INNER_PADDING};
      flex-direction: row;
    }
  }
`

const Logo = styled.div`
  img {
    width: ${theme.size.LOGO_SIZE};
    margin: auto 0;
    height: 3.75rem;
  }
`
const TopMenu = styled(List)`
  > div {
    display: flex;
    overflow: hidden;
    background-color: rgba(47, 54, 60, 0.94);
    width: 100vw;
    flex-direction: column;
    height: 100vh;
    height: ${props => (props.open ? '100vh' : '0')};
    transition: height 0.3s;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      display: flex;
      height: unset;
      background-color: transparent;
      width: inherit;
    }
    .chakra-divider {
      width: 90%;
      margin: 0 auto;
      border-color: #fff;
      transition: opacity 0.3s;
      opacity: ${props => (props.open ? '0.15' : '0')};
      @media screen and (min-width: ${theme.breakpoints.md}) {
        display: none;
      }
    }
  }
`
const ItemName = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  border: 2px solid transparent;
  text-align: center;
  cursor: pointer;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    margin: 0px 0px 5px 40px;
    font-size: 1.125rem;
    padding: 5px 0px 3px 0px;
  }
  a {
    display: inline-block;
    width: 100%;
    &:hover {
      text-decoration: underline #d52425;
      text-underline-position: under;
    }
  }
`

const MobMenuButton = styled(Button)`
  border-radius: 0;
  position: absolute;
  right: 0;
  height: 100%;
  transform: ${props => (props.open ? 'rotate(-90deg)' : 'none')};
`

export { Header, Logo, TopMenu, ItemName, MobMenuButton }
