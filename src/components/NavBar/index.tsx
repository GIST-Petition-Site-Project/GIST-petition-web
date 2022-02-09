import logo from '../../assets/img/new_logo.svg'
import { ReactComponent as MobMenu } from '../../assets/img/menu_icon.svg'
import {
  Header,
  Inner,
  Logo,
  Logo__Image,
  TopMenu,
  ItemName,
  MobMenuButton,
} from './styles'
import { getUsersMe, postLogout } from '../../utils/api'
import { setLogin, setLogout } from '../../redux/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useAppSelect } from '../../redux/store.hooks'
import { useState } from 'react'
import { ListItem } from '@chakra-ui/react'

const NavBar = (): JSX.Element => {
  const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      const status = await postLogout()
      console.log(status)
      dispatch(setLogout())
    } catch (error) {
      console.log(error)
    }
  }
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
            <ItemName className="item__menu">나의 청원</ItemName>
          </ListItem>
          <ListItem className="item">
            <ItemName className="item__menu">
              {useAppSelect(select => select.auth.isAuthorized) ? (
                <a onClick={handleLogout}>로그아웃</a>
              ) : (
                <a href="/login">로그인</a>
              )}
            </ItemName>
          </ListItem>
        </TopMenu>
        <MobMenuButton
          colorScheme={'black'}
          onClick={() => {
            setOpened(!opened)
          }}
          display={{ base: 'block', md: 'none' }}
          open={opened}
          _focus={{
            outline: 'none',
          }}
        >
          <MobMenu />
        </MobMenuButton>
      </Inner>
    </Header>
  )
}

export default NavBar
