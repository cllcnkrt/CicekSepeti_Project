import axios from 'axios';

import {
  FETCH_COLOR_FAILURE,
  FETCH_COLOR_PENDING,
  FETCH_COLOR_SUCCESS,
} from '../constants';

const fetchSuccess = (data) => ({
  type: FETCH_COLOR_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_COLOR_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_COLOR_PENDING,
});

const fetchColor = () => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get('https://cs-bootcamp-api.herokuapp.com/api/fe/v1/detail/color/all')
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchColor;
