import axios from 'axios';
import SIGNUP from 'constants/signUpConstants';

const fetchSuccess = (data) => ({
  type: SIGNUP.FETCH_SIGNUP_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: SIGNUP.FETCH_SIGNUP_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: SIGNUP.FETCH_SIGNUP_PENDING,
});

const fetchSignUp = (form) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post('http://bootcampapi.techcs.io/api/fe/v1/authorization/signup', form)
    .then((res) => dispatch(fetchSuccess(res.data.access_token)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchSignUp;
