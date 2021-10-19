import axios from 'axios';

import {
  FETCH_PURCHASE_FAILURE,
  FETCH_PURCHASE_PENDING,
  FETCH_PURCHASE_SUCCESS,
} from '../constants';
import fetchDetails from './productDetailsActions';

const fetchSuccess = (data) => ({
  type: FETCH_PURCHASE_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_PURCHASE_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_PURCHASE_PENDING,
});

const fetchPurchase = (id) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .put(
      `https://bootcampapi.techcs.io/api/fe/v1/product/purchase/${id}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    )
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)))
    .then(() => dispatch(fetchDetails(id)));
};

export default fetchPurchase;
