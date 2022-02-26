import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import authReducer from './auth/authSlice'
import registerSlice from './register/registerSlice'
import findPasswordSlice from './findPassword/findPasswordSlice'
import userInfoSlice from './userInfo/userInfoSlice'
// import queryReducer from './query/querySlice'

const reducers = combineReducers({
  auth: authReducer,
  userInfo: userInfoSlice,
  register: registerSlice,
  findPassword: findPasswordSlice,
  // query: queryReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['register', 'findPassword'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
