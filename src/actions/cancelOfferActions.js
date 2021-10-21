import axios from 'axios';

import {
  FETCH_CANCEL_FAILURE,
  FETCH_CANCEL_PENDING,
  FETCH_CANCEL_SUCCESS,
} from '../constants';

const fetchSuccess = (data) => ({
  type: FETCH_CANCEL_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_CANCEL_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_CANCEL_PENDING,
});

const fetchCancelOffer = (id) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .put(
      `https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/${id}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    )
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchCancelOffer;
