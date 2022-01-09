import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from './store'

const URL: string = process.env.REACT_APP_BASE_URL as string

export interface User {
  username: string
  password: string
}

const initialState: User = {
  username: '',
  password: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // extraReducers: builder => {
  //   builder.addCase(setUserAsync.fulfilled, (state, action) => {
  //     return { ...state, ...action.payload }
  //   })
  // },
})

export const loginUserAsync = createAsyncThunk(
  'LOGIN_USER',
  async (user: User) => {
    console.log(user)
    const response = await axios.post(`${URL}login`, user)
    return response
  },
)

export const getUserInfo = (state: RootState) => state.user

export default userSlice.reducer
