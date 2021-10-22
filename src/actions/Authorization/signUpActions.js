import axios from 'axios';
import { toast } from 'react-toastify';

import {
  FETCH_SIGNUP_FAILURE,
  FETCH_SIGNUP_PENDING,
  FETCH_SIGNUP_SUCCESS,
  SIGNUP_CLEAR,
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
export const SignUpClear = () => ({
  type: SIGNUP_CLEAR,
});
const fetchSignUp = (form) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post('https://bootcampapi.techcs.io/api/fe/v1/authorization/signup', form)
    .then((res) => {
      toast.success('Üye olundu', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setTimeout(() => {
        dispatch(fetchSuccess(res.data.access_token, form));
      }, 1500);
    })
    .catch((error) => {
      toast.error('Email zaten kullanılıyor', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      dispatch(fetchFailure(error));
    });
};

export default fetchSignUp;
