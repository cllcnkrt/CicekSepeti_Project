import axios from 'axios';

import {
  FETCH_REJECT_FAILURE,
  FETCH_REJECT_PENDING,
  FETCH_REJECT_SUCCESS,
} from '../constants';

const fetchSuccess = (data) => ({
  type: FETCH_REJECT_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_REJECT_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_REJECT_PENDING,
});

const fetchRejectOffer = (id) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post(
      `https://bootcampapi.techcs.io/api/fe/v1/account/reject-offer/${id}`,
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

export default fetchRejectOffer;
