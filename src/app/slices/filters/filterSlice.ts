import { createSlice } from '@reduxjs/toolkit'

export const PostFilters = {
  SHOW_ALL: 'SHOW_ALL',
}

const filterSlice = createSlice({
  name: 'postFilters',
  initialState: PostFilters.SHOW_ALL,
  reducers: {
    setPostFilter: (state, action) => {
      return action.payload
    },
  },
})

export const { setPostFilter } = filterSlice.actions

export default filterSlice.reducer
