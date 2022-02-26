import { createSlice } from '@reduxjs/toolkit'
const initialState: FindPasswordWhichUI = {
  isCodeRequested: false,
  isLoading: false,
  isExpired: false,
  isVerificated: false,
  isValid: false,
}

export const findPasswordSlice = createSlice({
  name: 'findPassword',
  initialState,
  reducers: {
    setFindPasswordWhichInfo: (state, action) => {
      switch (action.payload) {
        case 'CodeRequested':
          state.isCodeRequested = !state.isCodeRequested
          break
        case 'Loading':
          state.isLoading = !state.isLoading
          break
        case 'Expired':
          state.isExpired = !state.isExpired
          break
        case 'Verificated':
          state.isVerificated = !state.isVerificated
          break
        case 'Valid':
          state.isValid = !state.isValid
          break
        default:
          throw new Error('You sent a wrong action')
      }
    },
  },
})

export const { setFindPasswordWhichInfo } = findPasswordSlice.actions
export default findPasswordSlice.reducer
