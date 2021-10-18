import axios from 'axios';
import SIGNIN from 'constants/signInConstants';
import { toast } from 'react-toastify';

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
    .post('https://bootcampapi.techcs.io/api/fe/v1/authorization/signin', form)
    .then((res) => {
      toast.success('Giriş yapıldı', {
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
      toast.error('Emailiniz veya şifreniz hatalı', {
        position: 'top-right',
        autoClose: 2000,
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

export default fetchSignIn;
