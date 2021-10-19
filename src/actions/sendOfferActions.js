import axios from 'axios';

import {
  FETCH_SEND_OFFER_FAILURE,
  FETCH_SEND_OFFER_PENDING,
  FETCH_SEND_OFFER_SUCCESS,
} from '../constants';
import fetchDetails from './productDetailsActions';

const fetchSuccess = (data) => ({
  type: FETCH_SEND_OFFER_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_SEND_OFFER_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_SEND_OFFER_PENDING,
});

const fetchSendOffer = (id, data) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post(`https://bootcampapi.techcs.io/api/fe/v1/product/offer/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)))
    .then(() => dispatch(fetchDetails(id)));
};

export default fetchSendOffer;
