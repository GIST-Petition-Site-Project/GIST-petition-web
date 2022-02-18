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

const NavBar = (): JSX.Element => {
  const [opened, setOpened] = useState(false)

  return (
    <Header>
      <Inner flexDirection={{ base: 'column', md: 'row' }}>
        <Logo>
          <a href="/">
            <Logo__Image alt="logo" src={logo} />
          </a>
        </Logo>
        <TopMenu open={opened} flexDirection={{ base: 'column', md: 'row' }}>
          <ListItem className="item">
            <ItemName className="item__menu">
              <a href="/write">청원하기</a>
            </ItemName>
          </ListItem>
          <ListItem className="item">
            <ItemName className="item__menu">
              <a href="/petitions">모든 청원</a>
            </ItemName>
          </ListItem>
          <ListItem className="item">
            <ItemName className="item__menu">
              <a href="/answer">답변된 청원</a>
            </ItemName>
          </ListItem>
          <ListItem className="item">{MyMenu()}</ListItem>
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
