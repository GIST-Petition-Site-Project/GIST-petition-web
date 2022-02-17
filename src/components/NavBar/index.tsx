import logo from '../../assets/img/new_logo.svg'
import { ReactComponent as MobMenuIcon } from '../../assets/img/menu_icon.svg'
import {
  Header,
  Inner,
  Logo,
  Logo__Image,
  TopMenu,
  ItemName,
  MobMenuButton,
} from './styles'
import { useState } from 'react'
import { ListItem } from '@chakra-ui/react'
import MyMenu from './MyMenu'
import { Link } from 'react-router-dom'

const NavBar = (): JSX.Element => {
  const [opened, setOpened] = useState(false)
  const closeMenu = () => {
    if (opened) {
      setOpened(!opened)
    }
  }

  return (
    <Header>
      <Inner flexDirection={{ base: 'column', md: 'row' }}>
        <Logo>
          <Link to="/" onClick={closeMenu}>
            <Logo__Image alt="logo" src={logo} />
          </Link>
        </Logo>
        <TopMenu open={opened} flexDirection={{ base: 'column', md: 'row' }}>
          <ListItem className="item">
            <ItemName className="item__menu">
              <Link to="/write" onClick={closeMenu}>
                청원하기
              </Link>
            </ItemName>
          </ListItem>
          <ListItem className="item">
            <ItemName className="item__menu">
              <Link to="/petitions" onClick={closeMenu}>
                모든 청원
              </Link>
            </ItemName>
          </ListItem>
          <ListItem className="item">
            <ItemName className="item__menu" onClick={closeMenu}>
              답변된 청원
            </ItemName>
          </ListItem>
          <ListItem className="item">
            <MyMenu closeMenu={closeMenu} />
          </ListItem>
        </TopMenu>
        <MobMenuButton
          colorScheme={'black'}
          onClick={() => {
            setOpened(!opened)
          }}
          display={{ base: 'block', md: 'none' }}
          open={opened}
        >
          <MobMenuIcon />
        </MobMenuButton>
      </Inner>
    </Header>
  )
}

export default NavBar
