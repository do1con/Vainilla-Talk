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

axios.defaults.baseURL = 'http://localhost:4851/api/';

function loginAPI(loginData) {
  return axios.post('/user/login', loginData);
}
function* login(action) {
  try {
    const { data } = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: {
        nickname: data.nickname,
      },
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}
function signUpAPI(signUpData) {
  return axios.post('/user/', signUpData);
}
function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
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
