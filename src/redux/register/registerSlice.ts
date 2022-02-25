import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Register {
  whichUI: WhichUI
  agreeInfo: RegisterAgree
}
const initialState: Register = {
  whichUI: {
    isAgreed: false,
    isCodeRequested: false,
    isLoading: false,
    isExpired: false,
    isVerificated: false,
    isValid: false,
  },
  agreeInfo: {
    service: false,
    private: false,
  },
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setWhichInfo: (state, action) => {
<<<<<<< HEAD
      console.log(action.payload)
=======
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
      switch (action.payload) {
        case 'Agreed':
          state.whichUI.isAgreed = !state.whichUI.isAgreed
          break
        case 'CodeRequested':
          state.whichUI.isCodeRequested = !state.whichUI.isCodeRequested
          break
        case 'Loading':
          state.whichUI.isLoading = !state.whichUI.isLoading
          break
        case 'Expired':
          state.whichUI.isExpired = !state.whichUI.isExpired
          break
        case 'Verificated':
          state.whichUI.isVerificated = !state.whichUI.isVerificated
          break
        case 'Valid':
          state.whichUI.isValid = !state.whichUI.isValid
          break
        default:
          throw new Error('You sent a wrong action')
      }
    },
    setAgree: (state, action) => {
      switch (action.payload) {
        case 'Total':
          state.agreeInfo.private = !state.agreeInfo.private
          state.agreeInfo.service = !state.agreeInfo.service
          break
        case 'Service':
          state.agreeInfo.service = !state.agreeInfo.service
          break
        case 'Private':
          state.agreeInfo.private = !state.agreeInfo.private
          break
        default:
          throw new Error('You sent a wrong action')
      }
    },
  },
})

export const { setWhichInfo, setAgree } = registerSlice.actions
export default registerSlice.reducer
