import axios from 'axios';

import {
  FETCH_PRODUCT_CREATE_FAILURE,
  FETCH_PRODUCT_CREATE_PENDING,
  FETCH_PRODUCT_CREATE_SUCCESS,
} from '../../constants';

const fetchSuccess = (data) => ({
  type: FETCH_PRODUCT_CREATE_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_PRODUCT_CREATE_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_PRODUCT_CREATE_PENDING,
});

const fetchProductCreate = (data) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post(`https://bootcampapi.techcs.io/api/fe/v1/product/create/`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchProductCreate;
