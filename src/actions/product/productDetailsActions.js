import axios from 'axios';

import {
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_PENDING,
  FETCH_DETAILS_SUCCESS,
} from '../../constants';

const fetchSuccess = (data) => ({
  type: FETCH_DETAILS_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_DETAILS_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_DETAILS_PENDING,
});

const fetchDetails = (id) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get(`https://cs-bootcamp-api.herokuapp.com/api/fe/v1/product/${id}`)
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchDetails;
