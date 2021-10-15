import SIGNIN from 'constants/signInConstants';

const initialState = {
  signIn: null,
  isFetching: false,
  isError: false,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN.FETCH_SIGNIN_PENDING:
      return { ...state, isFetching: true, SIGNIN: null, isError: false };
    case SIGNIN.FETCH_SIGNIN_SUCCESS:
      return {
        ...state,
        SIGNIN: action.payload,
        isFetching: false,
        isError: false,
      };
    case SIGNIN.FETCH_SIGNIN_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default signInReducer;
