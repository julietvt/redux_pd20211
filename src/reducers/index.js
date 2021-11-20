import counterReducer from './counterReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userSagaReducer from './userSagaReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  userReducerStates: userReducer,
  auth: authReducer,
  userSaga: userSagaReducer,
});
export default rootReducer;
