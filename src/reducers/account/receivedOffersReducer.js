import {
  FETCH_RECEIVED_OFFERS_FAILURE,
  FETCH_RECEIVED_OFFERS_PENDING,
  FETCH_RECEIVED_OFFERS_SUCCESS,
} from '../../constants';

const initialState = {
  receivedOffers: [],
  isFetching: false,
  isError: false,
};

const receivedOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECEIVED_OFFERS_PENDING:
      return { ...state, isFetching: true, receivedOffers: [], isError: false };
    case FETCH_RECEIVED_OFFERS_SUCCESS:
      return {
        ...state,
        receivedOffers: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_RECEIVED_OFFERS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default receivedOffersReducer;
