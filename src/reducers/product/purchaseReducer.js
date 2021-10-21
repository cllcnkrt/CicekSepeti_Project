import {
  FETCH_PURCHASE_FAILURE,
  FETCH_PURCHASE_PENDING,
  FETCH_PURCHASE_SUCCESS,
} from '../../constants';

const initialState = {
  purchase: {},
  isFetching: false,
  isError: false,
};

const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PURCHASE_PENDING:
      return { ...state, isFetching: true, purchase: {}, isError: false };
    case FETCH_PURCHASE_SUCCESS:
      return {
        ...state,
        purchase: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_PURCHASE_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default purchaseReducer;
