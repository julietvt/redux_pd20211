import { takeLatest } from "@redux-saga/core/effects";
import ACTION_TYPES from "../actions/actionsType";
import {getUserSaga} from './getUserSaga';

function * rootSaga(){
    yield takeLatest(ACTION_TYPES.GET_USER_ACTION, getUserSaga);  
    //yield takeLatest(ACTION_TYPES.CREATE_USER_ACTION, createUserSaga);

}
export default rootSaga;