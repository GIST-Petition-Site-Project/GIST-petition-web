import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelect } from '@redux/store.hooks'

const AuthRoute = () => {
  const auth = useAppSelect(select => select.auth.isAuthorized)
  return auth ? <Outlet /> : <Navigate to="/login" />
}

export { AuthRoute }
