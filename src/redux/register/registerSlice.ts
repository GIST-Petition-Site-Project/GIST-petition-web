import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: WhichUI = {
  isAgreed: false,
  isCodeRequested: false,
  isLoading: false,
  isExpired: false,
  isVerificated: false,
  isValid: false,
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setWhichInfo: (state, action) => {
      switch (action.payload) {
        case 'Agreed':
          state.isAgreed = !state.isAgreed
          break
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

export const { setWhichInfo } = registerSlice.actions
export default registerSlice.reducer
