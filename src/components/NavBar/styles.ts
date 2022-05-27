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
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(2px);
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  border-bottom: 1px solid #ececec;
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
    .translate-btn {
      display: none;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        display: block;
      }
    }
    .translate-btn__mob {
      svg {
        height: 100%;
        width: 24px;
        margin: auto;
      }
      position: absolute;
      height: 100%;
      width: 60px;
      right: 0;
      :hover {
        cursor: pointer;
      }
      @media screen and (min-width: ${theme.breakpoints.md}) {
        display: none;
      }
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
    background-color: rgba(255, 255, 255, 0.9);
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
      border-color: #333;
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
  color: #333;
  text-align: center;
  cursor: pointer;
  border: 2px solid transparent;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    margin: 0px 0px 5px 40px;
    font-size: 1.125rem;
    padding: 5px 0px 3px 0px;
  }
  a,
  div {
    display: inline-block;
    width: 100%;
    &:hover {
      text-decoration: underline #d52425;
      text-underline-position: under;
    }
  }

  .signin__mob {
    @media screen and (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  }
  .signin {
    display: none;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      display: block;
    }
  }
`

const MobMenuButton = styled(Button)`
  border-radius: 0;
  position: absolute;
  left: 0;
  height: 100%;
  transform: ${props => (props.open ? 'rotate(-90deg)' : 'none')};
  display: block;
  background: transparent;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
  :focus {
    box-shadow: none;
  }
  :hover {
    background: transparent;
  }
`

export { Header, Logo, TopMenu, ItemName, MobMenuButton }
