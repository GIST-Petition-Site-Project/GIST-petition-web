import { combineReducers } from 'redux'
import filterReducer from './filters/filterSlice'
import userReducer from './user/userSlice'

export default combineReducers({
  user: userReducer,
  postFilter: filterReducer,
})
