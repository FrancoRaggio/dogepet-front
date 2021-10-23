import { combineReducers } from 'redux'
import AuthReducer from './redux/reducers/AuthReducer';

export default combineReducers({
  auth: AuthReducer,
})
