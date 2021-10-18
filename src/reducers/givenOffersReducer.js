import GIVEN_OFFERS from 'constants/givenOffersConstants';

const initialState = {
  givenOffers: [],
  isFetching: false,
  isError: false,
};

const givenOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GIVEN_OFFERS.FETCH_GIVEN_OFFERS_PENDING:
      return { ...state, isFetching: true, givenOffers: [], isError: false };
    case GIVEN_OFFERS.FETCH_GIVEN_OFFERS_SUCCESS:
      return {
        ...state,
        givenOffers: action.payload,
        isFetching: false,
        isError: false,
      };
    case GIVEN_OFFERS.FETCH_GIVEN_OFFERS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default givenOffersReducer;
