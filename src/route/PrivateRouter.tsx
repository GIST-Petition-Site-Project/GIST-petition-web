// import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
// import { getUserInfo } from '../app/slices/user/userSlice'
// import { useAppSelect } from '../app/configureStore.hooks'

const PrivateRoute = () => {
  // const user = useAppSelect(getUserInfo) // Validation logic in here
  const user = 'a'
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
