import {
  FETCH_BRAND_FAILURE,
  FETCH_BRAND_PENDING,
  FETCH_BRAND_SUCCESS,
} from '../constants';

const initialState = {
  brands: [],
  isFetching: false,
  isError: false,
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRAND_PENDING:
      return { ...state, isFetching: true, brands: [], isError: false };
    case FETCH_BRAND_SUCCESS:
      return {
        ...state,
        brands: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_BRAND_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default brandReducer;
