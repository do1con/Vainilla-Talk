export const initialState = {
  currentPage: '',
  isLoggedIn: false, // 로그인 여부
  isLoggingOut: false, // 로그아웃 시도 중
  isLoggingIn: false, // 로그인 시도 중
  logInErrorReason: '', // 로그인 에러 사유
  isSignedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: '', // 회원가입 실패 사유
  me: null,
  userInfo: null, // 남의 정보
  justSignedUp: false,
  isSearchingFriend: false,
  foundFriendList: null,
};

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
export const SEARCH_FRIEND_REQUEST = 'SEARCH_FRIEND_REQUEST';
export const SEARCH_FRIEND_SUCCESS = 'SEARCH_FRIEND_SUCCESS';
export const SEARCH_FRIEND_FAILURE = 'SEARCH_FRIEND_FAILURE';
export const ASK_FRIEND_REQUEST = 'ASK_FRIEND_REQUEST';
export const ASK_FRIEND_SUCCESS = 'ASK_FRIEND_SUCCESS';
export const ASK_FRIEND_FAILURE = 'ASK_FRIEND_FAILURE';
export const ACCEPT_FRIEND_REQUEST = 'ACCEPT_FRIEND_REQUEST';
export const ACCEPT_FRIEND_SUCCESS = 'ACCEPT_FRIEND_SUCCESS';
export const ACCEPT_FRIEND_FAILURE = 'ACCEPT_FRIEND_FAILURE';
export const EDIT_PROFILE_REQUEST = 'EDIT_PROFILE_REQUEST';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE';
export const SIGN_UP_ROUTE_INDEX = 'SIGN_UP_ROUTE_INDEX';

export const setCurrentPage = (data) => ({
  type: SET_CURRENT_PAGE,
  data: data,
});
export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});
export const logoutRequestAction = {
  type: LOG_OUT_REQUEST,
};
export const signUpRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.data,
      };
    }
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
        logInErrorReason: '',
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: action.data,
        isLoading: false,
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        me: null,
        logInErrorReason: action.error,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggedIn: false,
        isLoggingOut: false,
        me: null,
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        isSignedUp: false,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true,
        me: action.data,
        justSignedUp: true,
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSignedUp: false,
        isSigningUp: false,
        signUpErrorReason: action.data,
      };
    }
    case SIGN_UP_ROUTE_INDEX: {
      return {
        ...state,
        justSignedUp: false,
        signUpErrorReason: null,
        logInErrorReason: null,
      };
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        me: action.data,
      };
    }
    case SEARCH_FRIEND_REQUEST: {
      return {
        ...state,
        isSearchingFriend: true,
      };
    }
    case SEARCH_FRIEND_SUCCESS: {
      return {
        ...state,
        foundFriendList: action.data,
        isSearchingFriend: false,
      };
    }
    case SEARCH_FRIEND_FAILURE: {
      return {
        ...state,
        foundFriendList: null,
        isSearchingFriend: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
