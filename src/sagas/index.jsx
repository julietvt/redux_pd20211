import { takeLatest } from "@redux-saga/core/effects";
import ACTION_TYPES from "../actions/actionsType";
import {getUserSaga, createUserSaga} from './userSaga';

function * rootSaga(){
    yield takeLatest(ACTION_TYPES.USER_SAGA_LOGIN, getUserSaga);  
    yield takeLatest(ACTION_TYPES.CREATE_USER_ACTION, createUserSaga);

}
export default rootSaga;