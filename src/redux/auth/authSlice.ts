import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthorized: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: state => {
      state.isAuthorized = true
    },
    setLogout: state => {
      state.isAuthorized = false
    },
  },
})

export const { setLogin, setLogout } = authSlice.actions

export default authSlice.reducer
