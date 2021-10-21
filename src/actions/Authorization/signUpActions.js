import axios from 'axios';

import {
  FETCH_SIGNUP_FAILURE,
  FETCH_SIGNUP_PENDING,
  FETCH_SIGNUP_SUCCESS,
} from '../../constants';

const fetchSuccess = (data, form) => ({
  type: FETCH_SIGNUP_SUCCESS,
  payload: data,
  form,
});

const fetchFailure = (error) => ({
  type: FETCH_SIGNUP_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_SIGNUP_PENDING,
});

const fetchSignUp = (form) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post('https://bootcampapi.techcs.io/api/fe/v1/authorization/signup', form)
    .then((res) => dispatch(fetchSuccess(res.data.access_token, form)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchSignUp;
