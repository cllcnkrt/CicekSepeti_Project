import axios from 'axios';

import {
  FETCH_STATUS_FAILURE,
  FETCH_STATUS_PENDING,
  FETCH_STATUS_SUCCESS,
} from '../constants';

const fetchSuccess = (data) => ({
  type: FETCH_STATUS_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_STATUS_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_STATUS_PENDING,
});

const fetchStatus = () => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get('https://cs-bootcamp-api.herokuapp.com/api/fe/v1/detail/status/all')
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchStatus;
