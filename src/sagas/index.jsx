import { takeLatest } from "@redux-saga/core/effects";
import ACTION_TYPES from "../actions/actionsType";
import {userSaga} from './userSaga';

function * rootSaga(){
    yield takeLatest(ACTION_TYPES.USER_SAGA_LOGIN, userSaga);  

}
export default rootSaga;