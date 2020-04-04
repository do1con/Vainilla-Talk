import {
  all,
  fork,
  takeLatest,
  takeEvery,
  call,
  put,
  take,
  delay,
  putResolve,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  SEARCH_FRIEND_REQUEST,
  SEARCH_FRIEND_SUCCESS,
  SEARCH_FRIEND_FAILURE,
  ASK_FRIEND_REQUEST,
  ASK_FRIEND_SUCCESS,
  ASK_FRIEND_FAILURE,
  ACCEPT_FRIEND_REQUEST,
  ACCEPT_FRIEND_FAILURE,
  ACCEPT_FRIEND_SUCCESS,
} from '../reducers/user';

axios.defaults.baseURL = 'http://localhost:4851/api/';

function loginAPI(loginData) {
  return axios.post('/user/login', loginData, {
    withCredentials: true,
  });
}
function* login(action) {
  try {
    const { data } = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE,
      error: '로그인 실패',
    });
  }
}
function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function logoutAPI() {
  return axios.post(
    '/user/logout',
    {},
    {
      withCredentials: true,
    }
  );
}
function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_OUT_FAILURE,
      data: error,
    });
  }
}
function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function loadUserAPI() {
  return axios.get('/user/', {
    withCredentials: true,
  });
}
function* loadUser() {
  try {
    const { data } = yield call(loadUserAPI);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_USER_FAILURE,
      data: error,
    });
  }
}
function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
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

function searchFriendAPI(searchData) {
  return axios.post('/user/searchFriend/', searchData);
}
function* searchFriend(action) {
  try {
    const { data } = yield call(searchFriendAPI, action.data);
    yield put({
      type: SEARCH_FRIEND_SUCCESS,
      data: data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: SEARCH_FRIEND_FAILURE,
    });
  }
}
function* watchSearchFriend() {
  yield takeLatest(SEARCH_FRIEND_REQUEST, searchFriend);
}

function askFriendApi(askFriendData) {
  return axios.post(`/user/${askFriendData.userId}/addFriend/${askFriendData.friendId}`);
}
function* askFriend(action) {
  try {
    const { data } = yield call(askFriendApi, action.data);
    yield put({
      type: ASK_FRIEND_SUCCESS,
      data: data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ASK_FRIEND_FAILURE,
    });
  }
}
function* watchAskFriend() {
  yield takeLatest(ASK_FRIEND_REQUEST, askFriend);
}

function acceptFriendApi(acceptFriendData) {
  return axios.post('/user/acceptFriend', acceptFriendData);
}
function* acceptFriend(action) {
  try {
    const { data } = yield call(acceptFriendApi, action.data);
    yield put({
      type: ACCEPT_FRIEND_SUCCESS,
      data: data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ACCEPT_FRIEND_FAILURE,
    });
  }
}
function* watchAcceptFriend() {
  yield takeLatest(ACCEPT_FRIEND_REQUEST, acceptFriend);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignUp),
    fork(watchLoadUser),
    fork(watchSearchFriend),
    fork(watchAskFriend),
    fork(watchAcceptFriend),
  ]);
}
