import axios from 'axios';

import DETAILS from '../constants/productDetailsConstants';

const fetchSuccess = (data) => ({
  type: DETAILS.FETCH_DETAILS_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: DETAILS.FETCH_DETAILS_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: DETAILS.FETCH_DETAILS_PENDING,
});

const fetchDetails = (id) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get(`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchDetails;
