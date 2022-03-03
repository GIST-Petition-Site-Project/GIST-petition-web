import { setLogout } from '@redux/auth/authSlice'
import { useAppSelect } from '@redux/store.hooks'
import { postLogout } from '@api/userAPI'
import { Container, MobileMenu, Before } from './styles'
import { ItemName } from '../styles'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'

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

  const [opened, setOpened] = useState<boolean>(false)

  return useAppSelect(select => select.auth.isAuthorized) ? (
    <Container>
      <details className="details_overlay">
        <summary
          onClick={() => {
            setOpened(!opened)
          }}
        >
          <Before open={opened}></Before>내 정보
        </summary>
        <div className="menu_list">
          <Link to="/mypetitions">나의 청원</Link>
          <div role="none" className="dropdown_divider"></div>
          <a href="/myinfo">회원 정보 관리</a>
          <a onClick={handleLogout}>로그아웃</a>
        </div>
      </details>

      <MobileMenu>
        <ItemName>
          <Link to="/mypetitions">나의 청원</Link>
        </ItemName>
        <ItemName>
          <a href="/myinfo">회원 정보 관리</a>
        </ItemName>
        <ItemName>
          <Link to="#" onClick={handleLogout}>
            로그아웃
          </Link>
        </ItemName>
      </MobileMenu>
    </Container>
  ) : (
    <ItemName>
      <Link to="/login">로그인</Link>
    </ItemName>
  )
}

export default MyMenu
