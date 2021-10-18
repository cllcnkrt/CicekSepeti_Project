import axios from 'axios';
import GIVEN_OFFERS from 'constants/givenOffersConstants';

const fetchSuccess = (data) => ({
  type: GIVEN_OFFERS.FETCH_GIVEN_OFFERS_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: GIVEN_OFFERS.FETCH_GIVEN_OFFERS_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: GIVEN_OFFERS.FETCH_GIVEN_OFFERS_PENDING,
});

const fetchGivenOffers = () => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get('https://bootcampapi.techcs.io/api/fe/v1/account/given-offers')
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchGivenOffers;
