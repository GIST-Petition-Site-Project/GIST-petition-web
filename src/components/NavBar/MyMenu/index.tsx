import { Box, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { setLogout } from '../../../redux/auth/authSlice'
import { useAppSelect } from '../../../redux/store.hooks'
import { postLogout } from '../../../utils/api'
import { DesktopMenu, MobileMenu, MenuContent } from './styles'
import { ItemName } from '../styles'
import { useDispatch } from 'react-redux'

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
            <MenuContent>
              <a href="/mypetitions">나의 청원</a>
            </MenuContent>
            <MenuContent>비밀번호 변경</MenuContent>
            <MenuContent>
              <a onClick={handleLogout}>로그아웃</a>
            </MenuContent>
          </MenuList>
        </Menu>
      </DesktopMenu>

      <MobileMenu>
        <ItemName className="item__menu">
          <a href="/mypetitions">나의 청원</a>
        </ItemName>
        <ItemName className="item__menu">
          <a href="#">회원 정보 관리</a>
        </ItemName>
        <ItemName className="item__menu">
          <a onClick={handleLogout}>로그아웃</a>
        </ItemName>
      </MobileMenu>
    </>
  ) : (
    <ItemName className="item__menu">
      <a href="/login">로그인</a>
    </ItemName>
  )
}

export default MyMenu
