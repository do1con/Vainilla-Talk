import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../reducers/user';

function loginAPI(loginData) {
  return axios.post('/login', loginData);
}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}
function signUpAPI(signUpData) {
  return axios.post('http://localhost:4851/api/user/', signUpData);
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    console.log('here');
    console.log('here');
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      data: '이미 존재하는 아이디 입니다!',
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
