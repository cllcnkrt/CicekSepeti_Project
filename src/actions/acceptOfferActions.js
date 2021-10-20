import axios from 'axios';

import {
  FETCH_ACCEPT_OFFER_FAILURE,
  FETCH_ACCEPT_OFFER_PENDING,
  FETCH_ACCEPT_OFFER_SUCCESS,
} from '../constants';
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
  return (
    axios
      .put(
        `https://bootcampapi.techcs.io/api/fe/v1/account/accept-offer/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      )
      .then(() => dispatch(fetchSuccess()))
      /* tostify ekle res i kullan */
      .catch((error) => dispatch(fetchFailure(error)))
      .then(() => dispatch(fetchReceivedOffers()))
  );
};

export default fetchAcceptOffer;
