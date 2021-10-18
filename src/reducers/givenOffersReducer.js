import {
  FETCH_GIVEN_OFFERS_FAILURE,
  FETCH_GIVEN_OFFERS_PENDING,
  FETCH_GIVEN_OFFERS_SUCCESS,
} from '../constants';

const initialState = {
  givenOffers: [],
  isFetching: false,
  isError: false,
};

const givenOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GIVEN_OFFERS_PENDING:
      return { ...state, isFetching: true, givenOffers: [], isError: false };
    case FETCH_GIVEN_OFFERS_SUCCESS:
      return {
        ...state,
        givenOffers: action.payload,
        isFetching: false,
        isError: false,
      };
    case FETCH_GIVEN_OFFERS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default givenOffersReducer;
