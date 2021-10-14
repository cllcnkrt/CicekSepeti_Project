import PRODUCTS from 'constants/productsConstants';

const initialState = {
  products: [],
  isFetching: false,
  isError: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.FETCH_PRODUCTS_PENDING:
      return { ...state, isFetching: true, products: [], isError: false };
    case PRODUCTS.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
        isError: false,
      };
    case PRODUCTS.FETCH_PRODUCTS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default productsReducer;
