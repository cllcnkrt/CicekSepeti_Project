import axios from 'axios';

import {
  FETCH_BRAND_FAILURE,
  FETCH_BRAND_PENDING,
  FETCH_BRAND_SUCCESS,
} from '../constants';

const fetchSuccess = (data) => ({
  type: FETCH_BRAND_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_BRAND_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_BRAND_PENDING,
});

const fetchBrand = () => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get('https://cs-bootcamp-api.herokuapp.com/api/fe/v1/detail/brand/all')
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchBrand;
