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
<<<<<<< HEAD
=======
import findPasswordSlice from './findPassword/findPasswordSlice'

>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
// import queryReducer from './query/querySlice'

const reducers = combineReducers({
  auth: authReducer,
  register: registerSlice,
<<<<<<< HEAD
=======
  findPassword: findPasswordSlice,
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
  // query: queryReducer,
})

const persistConfig = {
  key: 'root',
  storage,
<<<<<<< HEAD
  blacklist: ['register'],
=======
  blacklist: ['register', 'findPassword'],
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
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
