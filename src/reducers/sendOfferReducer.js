import {
  FETCH_SEND_OFFER_FAILURE,
  FETCH_SEND_OFFER_PENDING,
  FETCH_SEND_OFFER_SUCCESS,
} from '../constants';

const initialState = {
  sendOffer: {},
  isFetching: false,
  isError: false,
};

const sendOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEND_OFFER_PENDING:
      return { ...state, isFetching: true, sendOffer: {}, isError: false };
    case FETCH_SEND_OFFER_SUCCESS:
      return {
        ...state,
        sendOffer: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_SEND_OFFER_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default sendOfferReducer;
