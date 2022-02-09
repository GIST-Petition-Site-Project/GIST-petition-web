import logo from '../../assets/img/new_logo.svg'
import { ReactComponent as MobMenu } from '../../assets/img/menu_icon.svg'
import {
  Header,
  Inner,
  Logo,
  Logo__Image,
  Menu,
  ItemName,
  MobMenuButton,
} from './styles'
import { getUsersMe, postLogout } from '../../utils/api'
import { setLogin, setLogout } from '../../redux/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useAppSelect } from '../../redux/store.hooks'
import { useState } from 'react'

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
      <Inner>
        <Logo>
          <a href="/">
            <Logo__Image alt="logo" src={logo} />
          </a>
        </Logo>
        <Menu>
          <li className="item">
            <ItemName className="item__menu">
              <a href="/write">청원하기</a>
            </ItemName>
          </li>
          <li className="item">
            <ItemName className="item__menu">
              <a href="/petitions">모든 청원</a>
            </ItemName>
          </li>
          <li className="item">
            <ItemName className="item__menu">나의 청원</ItemName>
          </li>
          <li className="item">
            <ItemName className="item__menu">
              {useAppSelect(select => select.auth.isAuthorized) ? (
                <a onClick={handleLogout}>로그아웃</a>
              ) : (
                <a href="/login">로그인</a>
              )}
            </ItemName>
          </li>
        </Menu>
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
