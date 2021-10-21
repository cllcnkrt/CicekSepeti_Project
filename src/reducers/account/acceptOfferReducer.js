import {
  FETCH_ACCEPT_OFFER_FAILURE,
  FETCH_ACCEPT_OFFER_PENDING,
  FETCH_ACCEPT_OFFER_SUCCESS,
} from '../../constants';

const initialState = {
  isFetching: false,
  isError: false,
};

const acceptOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCEPT_OFFER_PENDING:
      return { ...state, isFetching: true, isError: false };
    case FETCH_ACCEPT_OFFER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case FETCH_ACCEPT_OFFER_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default acceptOfferReducer;
