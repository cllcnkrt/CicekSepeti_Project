import axios from 'axios';

import {
  FETCH_GIVEN_OFFERS_FAILURE,
  FETCH_GIVEN_OFFERS_PENDING,
  FETCH_GIVEN_OFFERS_SUCCESS,
} from '../../constants';

const fetchSuccess = (data) => ({
  type: FETCH_GIVEN_OFFERS_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_GIVEN_OFFERS_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_GIVEN_OFFERS_PENDING,
});

const fetchGivenOffers = () => async (dispatch) => {
  dispatch(fetchPending());

  return axios
    .get('https://bootcampapi.techcs.io/api/fe/v1/account/given-offers', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchGivenOffers;
