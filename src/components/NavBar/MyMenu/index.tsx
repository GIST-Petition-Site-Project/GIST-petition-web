import { setLogout } from '@redux/auth/authSlice'
import { useAppSelect } from '@redux/store.hooks'
import { postLogout } from '@api/userAPI'
import { Container, MobileMenu, Before } from './styles'
import { ItemName } from '../styles'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'
import { FaRegUser } from 'react-icons/fa'
import { GrLogin } from 'react-icons/gr'

const MyMenu = (): JSX.Element => {
  const t = useTranslate(locale)

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
          <Before open={opened}></Before>
          <FaRegUser />
        </summary>
        <div className="menu_list">
          <Link to="/mypetitions">{t('mine')}</Link>
          <div role="none" className="dropdown_divider"></div>
          <a href="/myinfo">{t('account')}</a>
          <a onClick={handleLogout}>{t('signout')}</a>
        </div>
      </details>

      <MobileMenu>
        <ItemName>
          <Link to="/mypetitions">{t('mine')}</Link>
        </ItemName>
        <ItemName>
          <a href="/myinfo">{t('account')}</a>
        </ItemName>
        <ItemName>
          <Link to="#" onClick={handleLogout}>
            {t('signout')}
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
        <span className="signin__mob">{t('signin')}</span>
        <GrLogin className="signin" style={{ marginLeft: '-20px' }} />
      </div>
    </ItemName>
  )
}

export default MyMenu
