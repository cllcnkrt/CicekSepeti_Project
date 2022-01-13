import axios from 'axios';

import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS,
} from '../constants';

const fetchSuccess = (data) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: FETCH_CATEGORIES_PENDING,
});

const fetchCategories = () => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get('https://cs-bootcamp-api.herokuapp.com/api/fe/v1/detail/category/all')
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchCategories;
