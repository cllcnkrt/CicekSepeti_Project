/* eslint-disable no-case-declarations */
import {
  FETCH_SIGNIN_FAILURE,
  FETCH_SIGNIN_PENDING,
  FETCH_SIGNIN_SUCCESS,
} from '../constants';

const initialState = {
  accessToken: '',
  signIn: {},
  isFetching: false,
  isError: false,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIGNIN_PENDING:
      return { ...state, isFetching: true, signIn: {}, isError: false };
    case FETCH_SIGNIN_SUCCESS:
      window.localStorage.setItem('access_token', action.payload);
      window.localStorage.setItem('user-info', action.form.email);
      return {
        ...state,
        accessToken: action.payload,
        signIn: action.form.email,
        isFetching: false,
        isError: false,
      };
    case FETCH_SIGNIN_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default signInReducer;
