import { put } from 'redux-saga/effects';

export function* getUsers() {
  // забрать данные либо баз
  yield put(getUserRequest());
  try {
  } catch (e) {
    yield put(getUserError(e));
  }
}
