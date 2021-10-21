import {
  FETCH_CANCEL_FAILURE,
  FETCH_CANCEL_PENDING,
  FETCH_CANCEL_SUCCESS,
} from '../../constants';

const initialState = {
  cancelOffer: {},
  isFetching: false,
  isError: false,
};

const cancelOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CANCEL_PENDING:
      return { ...state, isFetching: true, cancelOffer: {}, isError: false };
    case FETCH_CANCEL_SUCCESS:
      return {
        ...state,
        cancelOffer: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_CANCEL_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default cancelOfferReducer;
