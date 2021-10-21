import {
  FETCH_STATUS_FAILURE,
  FETCH_STATUS_PENDING,
  FETCH_STATUS_SUCCESS,
} from '../constants';

const initialState = {
  status: [],
  isFetching: false,
  isError: false,
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUS_PENDING:
      return { ...state, isFetching: true, status: [], isError: false };
    case FETCH_STATUS_SUCCESS:
      return {
        ...state,
        status: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_STATUS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default statusReducer;
