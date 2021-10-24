/* eslint-disable no-debugger */
import fetchGivenOffers from 'actions/account/givenOffersActions';
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  FETCH_SEND_OFFER_FAILURE,
  FETCH_SEND_OFFER_PENDING,
  FETCH_SEND_OFFER_SUCCESS,
} from '../../constants';
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
    .then((res) => {
      dispatch(fetchSuccess(res.data));
      toast.success('Teklif verildi', {
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
    .catch((error) => {
      dispatch(fetchFailure(error));

      toast.error('Teklif verilemiyor', {
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

    .finally(() => {
      dispatch(fetchDetails(id));
      dispatch(fetchGivenOffers());
    });
};

export default fetchSendOffer;
