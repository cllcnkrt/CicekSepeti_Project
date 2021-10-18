import axios from 'axios';
import RECEIVED_OFFERS from 'constants/receivedOffersConstants';

const fetchSuccess = (data) => ({
  type: RECEIVED_OFFERS.FETCH_RECEIVED_OFFERS_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: RECEIVED_OFFERS.FETCH_RECEIVED_OFFERS_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: RECEIVED_OFFERS.FETCH_RECEIVED_OFFERS_PENDING,
});

const fetchReceivedOffers = () => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get('https://bootcampapi.techcs.io/api/fe/v1/account/given-offers')
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchReceivedOffers;
