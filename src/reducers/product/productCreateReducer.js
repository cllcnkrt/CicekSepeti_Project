import {
  FETCH_PRODUCT_CREATE_FAILURE,
  FETCH_PRODUCT_CREATE_PENDING,
  FETCH_PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_CLEAR,
} from '../../constants';

const initialState = {
  productCreate: {},
  isFetching: false,
  isError: false,
};

const productCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_CREATE_PENDING:
      return { ...state, isFetching: true, productCreate: {}, isError: false };
    case FETCH_PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        productCreate: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_PRODUCT_CREATE_FAILURE:
      return { ...state, isError: true, isFetching: false };
    case PRODUCT_CREATE_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default productCreateReducer;
