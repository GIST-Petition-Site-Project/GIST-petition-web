import { setLogout } from '@redux/auth/authSlice'
import { useAppSelect } from '@redux/store.hooks'
import { postLogout } from '@api/userAPI'
import { Container, MobileMenu, Before } from './styles'
import { ItemName } from '../styles'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

const MyMenu = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await postLogout()
      dispatch(setLogout())
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const [opened, setOpened] = useState<boolean>(false)
  const details = useRef<HTMLDetailsElement>(null)

  return useAppSelect(select => select.auth.isAuthorized) ? (
    <Container>
      <details className="details_overlay" ref={details}>
        <summary
          onClick={() => {
            setOpened(!opened)
          }}
          onKeyDown={e => {
            if (e.key === 'Escape' && opened && details.current) {
              details.current.open = !open
              setOpened(!opened)
            }
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
      <div
        onClick={_e => {
          if (location.pathname.includes('login')) return
          navigate(
            {
              pathname: '/login',
              hash: location.pathname,
            },
            { replace: true },
          )
        }}
      >
        로그인
      </div>
    </ItemName>
  )
}

export default MyMenu
