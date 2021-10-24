import axios from 'axios';
import { toast } from 'react-toastify';

import {
  FETCH_ACCEPT_OFFER_FAILURE,
  FETCH_ACCEPT_OFFER_PENDING,
  FETCH_ACCEPT_OFFER_SUCCESS,
} from '../../constants';
import fetchReceivedOffers from './receivedOffersActions';

const fetchSuccess = () => ({
  type: FETCH_ACCEPT_OFFER_SUCCESS,
});

const fetchFailure = (error) => ({
  type: FETCH_ACCEPT_OFFER_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_ACCEPT_OFFER_PENDING,
});

const fetchAcceptOffer = (id) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .put(
      `https://bootcampapi.techcs.io/api/fe/v1/account/accept-offer/${id}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    )
    .then(() => {
      dispatch(fetchSuccess());
      toast.success('Teklif kabul edildi', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    })
    .catch((error) => dispatch(fetchFailure(error)))
    .finally(() => dispatch(fetchReceivedOffers()));
};

export default fetchAcceptOffer;
