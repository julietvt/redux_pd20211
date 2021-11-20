import counterReducer from './counterReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  userReducerStates: userReducer,
  auth: authReducer,
});
export default rootReducer;
