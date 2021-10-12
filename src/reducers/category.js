import CATEGORIES from 'constants/category';

const initialState = {
  categories: {},
  isFetching: false,
  isError: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES.FETCH_CATEGORIES_PENDING:
      return { ...state, isFetching: true, categories: {}, isError: false };
    case CATEGORIES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetching: false,
        isError: false,
      };
    case CATEGORIES.FETCH_CATEGORIES_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default categoryReducer;
