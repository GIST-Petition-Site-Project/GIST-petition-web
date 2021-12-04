import { createSlice } from '@reduxjs/toolkit'

const initialState: { user: string | null; role: string | null } = {
  user: null,
  role: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: state => {
      state.user = null
    },
  },
})

export const { login, logout } = userSlice.actions
export const selectUser = (state: { user: { user: string } }) => state.user.user
export default userSlice.reducer
