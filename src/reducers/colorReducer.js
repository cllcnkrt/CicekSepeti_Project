import {
  FETCH_COLOR_FAILURE,
  FETCH_COLOR_PENDING,
  FETCH_COLOR_SUCCESS,
} from '../constants';

const initialState = {
  colors: [],
  isFetching: false,
  isError: false,
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLOR_PENDING:
      return { ...state, isFetching: true, colors: [], isError: false };
    case FETCH_COLOR_SUCCESS:
      return {
        ...state,
        colors: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_COLOR_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default colorReducer;
