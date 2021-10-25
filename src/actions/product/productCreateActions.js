import axios from 'axios';
import { toast } from 'react-toastify';

import {
  FETCH_PRODUCT_CREATE_FAILURE,
  FETCH_PRODUCT_CREATE_PENDING,
  FETCH_PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_CLEAR,
} from '../../constants';

const fetchSuccess = (data) => ({
  type: FETCH_PRODUCT_CREATE_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_PRODUCT_CREATE_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_PRODUCT_CREATE_PENDING,
});
export const productCreateClear = () => ({
  type: PRODUCT_CREATE_CLEAR,
});
const fetchProductCreate = (data) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post(`https://bootcampapi.techcs.io/api/fe/v1/product/create`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      dispatch(fetchSuccess(res.data));
      toast.success('Görsel başarıyla yüklendi', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    })
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchProductCreate;
