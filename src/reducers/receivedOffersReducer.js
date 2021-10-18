import RECEIVED_OFFERS from 'constants/receivedOffersConstants';

const initialState = {
  receivedOffers: [],
  isFetching: false,
  isError: false,
};

const receivedOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_OFFERS.FETCH_RECEIVED_OFFERS_PENDING:
      return { ...state, isFetching: true, receivedOffers: [], isError: false };
    case RECEIVED_OFFERS.FETCH_RECEIVED_OFFERS_SUCCESS:
      return {
        ...state,
        receivedOffers: action.payload,
        isFetching: false,
        isError: false,
      };
    case RECEIVED_OFFERS.FETCH_RECEIVED_OFFERS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default receivedOffersReducer;
