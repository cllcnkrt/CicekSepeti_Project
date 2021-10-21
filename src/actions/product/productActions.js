import axios from 'axios';

import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
} from '../../constants';

const fetchSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_PRODUCTS_PENDING,
});

const fetchProducts = () => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get('https://bootcampapi.techcs.io/api/fe/v1/product/all')
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchProducts;
