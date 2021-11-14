import counterReducer from './counterReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter: counterReducer,
  userReducerStates: userReducer,
});
export default rootReducer;
