/* eslint-disable no-debugger */
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  FETCH_IMAGE_UPLOAD_FAILURE,
  FETCH_IMAGE_UPLOAD_PENDING,
  FETCH_IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_CLEAR,
  IMAGE_UPLOAD_PROGRESS,
} from '../constants';

const fetchSuccess = (data) => ({
  type: FETCH_IMAGE_UPLOAD_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_IMAGE_UPLOAD_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_IMAGE_UPLOAD_PENDING,
});
export const imageUploadClear = () => ({
  type: IMAGE_UPLOAD_CLEAR,
});

export const imageProgress = (data) => ({
  type: IMAGE_UPLOAD_PROGRESS,
  payload: data,
});
const fetchUploadImage = (image) => async (dispatch) => {
  dispatch(fetchPending());
  const formData = new FormData();
  formData.append('file', image);
  return axios
    .post(
      `https://bootcampapi.techcs.io/api/fe/v1/file/upload/image`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (ProgressEvent) => {
          dispatch(
            imageProgress(
              Math.floor((ProgressEvent.loaded * 100) / ProgressEvent.total)
            )
          );
        },
      }
    )
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
    .catch((error) => {
      dispatch(fetchFailure(error));
      toast.error('Lütfen maksimum 400kb değerinde görsel yükleyiniz ', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    });
};

export default fetchUploadImage;
