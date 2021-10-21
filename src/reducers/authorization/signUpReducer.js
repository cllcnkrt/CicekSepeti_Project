import {
  FETCH_SIGNUP_FAILURE,
  FETCH_SIGNUP_PENDING,
  FETCH_SIGNUP_SUCCESS,
  SIGNUP_CLEAR,
} from '../../constants';

const initialState = {
  accessToken: '',
  signUp: {},
  isFetching: false,
  isError: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIGNUP_PENDING:
      return { ...state, isFetching: true, signUp: {}, isError: false };
    case FETCH_SIGNUP_SUCCESS: {
      window.localStorage.setItem('access_token', action.payload);
      window.localStorage.setItem('user-info', action.form.email);
      return {
        ...state,
        accessToken: action.payload,
        signUp: action.form.email,
        isFetching: false,
        isError: false,
      };
    }

    case FETCH_SIGNUP_FAILURE:
      return { ...state, isError: action.payload.message, isFetching: false };
    case SIGNUP_CLEAR:
      return {
        ...state,
        isError: false,
        isFetching: false,
        signUp: {},
        accessToken: '',
      };
    default:
      return state;
  }
};

export default signUpReducer;
