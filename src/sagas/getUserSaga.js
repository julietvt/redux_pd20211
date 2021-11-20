import { applyMiddleware } from 'redux';
import { put } from 'redux-saga/effects';
import { getUserSuccess, getUserError, getUserRequest } from '../actions';
import * as API from './../api';

export function* getUserSaga() {
  // забрать данные либо баз
  // отправляю GET_USER_REQUEST
  yield put(getUserRequest());
  try {
    // загрузка пользователей
    const { data: users } = yield API.getUsers();
    // отправить экшн GET_USER_SUCCESS
    yield put(getUserSuccess(users));
  } catch (e) {
    // отправим экшн GET_USER_ERROR
    yield put(getUserError(e));
  }
}
