import DETAILS from 'constants/productDetailsConstants';

const initialState = {
  productDetails: {},
  isFetching: false,
  isError: false,
};

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS.FETCH_DETAILS_PENDING:
      return { ...state, isFetching: true, productDetails: {}, isError: false };
    case DETAILS.FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.payload,
        isFetching: false,
        isError: false,
      };
    case DETAILS.FETCH_DETAILS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default productDetailsReducer;
