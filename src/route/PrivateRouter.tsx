import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelect } from '../redux/store.hooks'

const AuthRoute = () => {
  // const user = useAppSelect(getUserInfo) // Validation logic in here
  const auth = useAppSelect(select => select.auth.isAuthorized)
  return auth ? <Outlet /> : <Navigate to="/login" />
}

// const UnauthRoute = () => {
//   const auth = useAppSelect(select => select.auth.isAuthorized)
//   // return !auth ? <Outlet /> : <Navigate to="/" />
// }

// export { AuthRoute, UnauthRoute }
export { AuthRoute }
