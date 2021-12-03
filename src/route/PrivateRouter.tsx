// import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { selectUser } from '../app/slices/user/userSlice'

const PrivateRoute = () => {
  // const user = useSelector(selectUser) // Validation logic in here
  const user = 'a'
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
