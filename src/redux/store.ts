import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

/* HMR
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').preventDefault()
    store.replaceReducer(newRootReducer)
  })
}
*/

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
