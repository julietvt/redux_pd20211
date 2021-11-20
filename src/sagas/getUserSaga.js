import { put } from 'redux-saga/effects';

export function* getUserSaga() {
  // забрать данные либо баз
  yield put(getUserRequest());
  try {
  } catch (e) {
    yield put(getUserError(e));
  }
}
