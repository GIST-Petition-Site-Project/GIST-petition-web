import { Outlet, useNavigate } from 'react-router-dom'
import { useAppSelect } from '@redux/store.hooks'
import { useEffect } from 'react'

const AuthRoute = () => {
  const auth = useAppSelect(select => select.auth.isAuthorized)
  const navigate = useNavigate()
  useEffect(() => {
    if (!auth) {
      navigate(
        { pathname: '/login', hash: location.pathname },
        { replace: true },
      )
    }
    return
  }, [])

  return <Outlet />
}

export { AuthRoute }
