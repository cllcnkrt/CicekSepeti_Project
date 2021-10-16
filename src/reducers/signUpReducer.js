import SIGNUP from 'constants/signUpConstants';

const initialState = {
  accessToken: '',
  signUp: {},
  isFetching: false,
  isError: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP.FETCH_SIGNUP_PENDING:
      return { ...state, isFetching: true, signUp: {}, isError: false };
    case SIGNUP.FETCH_SIGNUP_SUCCESS: {
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

    case SIGNUP.FETCH_SIGNUP_FAILURE:
      return { ...state, isError: action.payload.message, isFetching: false };
    default:
      return state;
  }
};

export default signUpReducer;
