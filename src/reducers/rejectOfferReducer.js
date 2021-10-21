import {
  FETCH_REJECT_FAILURE,
  FETCH_REJECT_PENDING,
  FETCH_REJECT_SUCCESS,
} from '../constants';

const initialState = {
  rejectOffer: {},
  isFetching: false,
  isError: false,
};

const rejectOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REJECT_PENDING:
      return { ...state, isFetching: true, rejectOffer: {}, isError: false };
    case FETCH_REJECT_SUCCESS:
      return {
        ...state,
        rejectOffer: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_REJECT_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default rejectOfferReducer;
