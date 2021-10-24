import axios from 'axios';
import { toast } from 'react-toastify';

import {
  FETCH_REJECT_FAILURE,
  FETCH_REJECT_PENDING,
  FETCH_REJECT_SUCCESS,
} from '../../constants';
import fetchReceivedOffers from './receivedOffersActions';

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
    .then((res) => {
      dispatch(fetchSuccess(res.data));
      toast.success('Teklif reddedildi', {
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

export default fetchRejectOffer;
