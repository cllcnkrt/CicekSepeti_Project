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

const fetchCategories = () => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get('https://bootcampapi.techcs.io/api/fe/v1/detail/category/all')
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchCategories;
