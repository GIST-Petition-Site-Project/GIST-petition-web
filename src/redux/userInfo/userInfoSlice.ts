import { createSlice } from '@reduxjs/toolkit'

const initialState: WhichUI = {
  isAgreed: false,
  isCodeRequested: false,
  isLoading: false,
  isExpired: false,
  isVerificated: false,
  isValid: false,
  btnUI: 'Disagreed',
  contentUI: 'Disagreed',
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setWhichInfo: (state, action) => {
      switch (action.payload) {
        case `Reset`:
          state.isAgreed = false
          state.isCodeRequested = false
          state.isExpired = false
          state.isLoading = false
          state.isValid = false
          ;(state.isVerificated = false), (state.btnUI = 'Disagreed')
          break
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
    setBtnInfo: (state, action) => {
      state.btnUI = action.payload
    },
    setContentInfo: (state, action) => {
      state.contentUI = action.payload
    },
  },
})

export const { setWhichInfo, setBtnInfo, setContentInfo } =
  userInfoSlice.actions
export default userInfoSlice.reducer
