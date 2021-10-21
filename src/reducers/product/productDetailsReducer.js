import {
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_PENDING,
  FETCH_DETAILS_SUCCESS,
} from '../../constants';

const initialState = {
  productDetails: {},
  isFetching: false,
  isError: false,
};

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_PENDING:
      return { ...state, isFetching: true, productDetails: {}, isError: false };
    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_DETAILS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default productDetailsReducer;
