import SIGNUP from 'constants/signUpConstants';

const initialState = {
  signUp: null,
  isFetching: false,
  isError: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP.FETCH_SIGNUP_PENDING:
      return { ...state, isFetching: true, SIGNUP: {}, isError: false };
    case SIGNUP.FETCH_SIGNUP_SUCCESS: {
      window.localStorage.setItem('access_token', action.payload);
      return {
        ...state,
        SIGNUP: action.payload,
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
