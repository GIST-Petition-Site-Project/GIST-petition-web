import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { setLogout } from '../../../redux/auth/authSlice'
import { useAppSelect } from '../../../redux/store.hooks'
import { postLogout } from '../../../utils/api'
import { DesktopMenu, MobileMenu } from './styles'
import { ItemName } from '../styles'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const MyMenu = (): JSX.Element => {
  const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      const status = await postLogout()
      dispatch(setLogout())
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return useAppSelect(select => select.auth.isAuthorized) ? (
    <>
      <DesktopMenu>
        <Menu>
          <MenuButton
            as={ItemName}
            px={4}
            py={2}
            transition="all 0.2s"
            border="0"
          >
            내 정보
          </MenuButton>
          <MenuList
            bg={'rgba(47, 54, 60, 0.9)'}
            borderRadius={'none'}
            color={'white'}
          >
            <MenuItem>
              <Link to="/mypetitions">나의 청원</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">회원 정보 관리</Link>
            </MenuItem>
            <MenuItem>
              <a onClick={handleLogout}>로그아웃</a>
            </MenuItem>
          </MenuList>
        </Menu>
      </DesktopMenu>

      <MobileMenu>
        <ItemName>
          <Link to="/mypetitions">나의 청원</Link>
        </ItemName>
        <ItemName>
          <Link to="#">회원 정보 관리</Link>
        </ItemName>
        <ItemName>
          <Link to="#" onClick={handleLogout}>
            로그아웃
          </Link>
        </ItemName>
      </MobileMenu>
    </>
  ) : (
    <ItemName>
      <Link to="/login">로그인</Link>
    </ItemName>
  )
}

export default MyMenu
