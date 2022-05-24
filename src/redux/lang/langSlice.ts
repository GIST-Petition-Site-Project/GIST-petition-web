import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { mode: 'ko' | 'en' } = {
  mode: 'ko',
}

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    toggleLang: state => {
      if (state.mode === 'ko') state.mode = 'en'
      else state.mode = 'ko'
    },
  },
})

export const { toggleLang } = langSlice.actions

export default langSlice.reducer
