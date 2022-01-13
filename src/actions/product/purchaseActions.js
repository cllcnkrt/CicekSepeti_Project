import fetchGivenOffers from 'actions/account/givenOffersActions';
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  FETCH_PURCHASE_FAILURE,
  FETCH_PURCHASE_PENDING,
  FETCH_PURCHASE_SUCCESS,
} from '../../constants';
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
      `https://cs-bootcamp-api.herokuapp.com/api/fe/v1/product/purchase/${id}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    )
    .then((res) => {
      dispatch(fetchSuccess(res.data));
      toast.success('Satın alındı', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      dispatch(fetchGivenOffers());
    })
    .catch((error) => {
      dispatch(fetchFailure(error));
      toast.error('Kendi ürününüzü satın alamazsınız!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    })
    .then(() => dispatch(fetchDetails(id)));
};

export default fetchPurchase;
