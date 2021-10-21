import axios from 'axios';

import {
  FETCH_RECEIVED_OFFERS_FAILURE,
  FETCH_RECEIVED_OFFERS_PENDING,
  FETCH_RECEIVED_OFFERS_SUCCESS,
} from '../../constants';

const fetchSuccess = (data) => ({
  type: FETCH_RECEIVED_OFFERS_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_RECEIVED_OFFERS_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_RECEIVED_OFFERS_PENDING,
});

const fetchReceivedOffers = () => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get('https://bootcampapi.techcs.io/api/fe/v1/account/received-offers', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchReceivedOffers;
