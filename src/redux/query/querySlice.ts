import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  limit: 10,
  offset: 1,
  category: '전체',
}

export const querySlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
  },
})

export const { setLimit, setOffset, setCategory } = querySlice.actions

export default querySlice.reducer
