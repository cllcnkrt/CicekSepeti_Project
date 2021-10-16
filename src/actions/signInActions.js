import axios from 'axios';
import SIGNIN from 'constants/signInConstants';

const fetchSuccess = (data, form) => ({
  type: SIGNIN.FETCH_SIGNIN_SUCCESS,
  payload: data,
  form,
});

const fetchFailure = (error) => ({
  type: SIGNIN.FETCH_SIGNIN_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: SIGNIN.FETCH_SIGNIN_PENDING,
});

const fetchSignIn = (form) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post('http://bootcampapi.techcs.io/api/fe/v1/authorization/signin', form)
    .then((res) => dispatch(fetchSuccess(res.data.access_token, form)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchSignIn;
