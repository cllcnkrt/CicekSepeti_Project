import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS,
} from '../constants';

const initialState = {
  categories: [],
  isFetching: false,
  isError: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_PENDING:
      return { ...state, isFetching: true, categories: [], isError: false };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default categoryReducer;
