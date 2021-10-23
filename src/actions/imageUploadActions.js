import axios from 'axios';

import {
  FETCH_IMAGE_UPLOAD_FAILURE,
  FETCH_IMAGE_UPLOAD_PENDING,
  FETCH_IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_CLEAR,
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
      }
    )
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchUploadImage;
