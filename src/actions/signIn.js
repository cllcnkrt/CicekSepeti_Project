import axios from 'axios';
import CATEGORIES from 'constants/categoryConstants';

const fetchSuccess = (data) => ({
  type: CATEGORIES.FETCH_CATEGORIES_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: CATEGORIES.FETCH_CATEGORIES_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: CATEGORIES.FETCH_CATEGORIES_PENDING,
});

const fetchCATEGORIES = (form) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post('---', form)
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchCATEGORIES;
