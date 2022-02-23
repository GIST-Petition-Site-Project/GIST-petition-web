import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: QueryParams = {
  size: 10,
  page: 1,
  categoryId: 0,
}

export const querySlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload
    },
  },
})

export const { setSize, setPage, setCategory } = querySlice.actions

export default querySlice.reducer
