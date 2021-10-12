import CATEGORIES from 'constants/category';

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

const fetchCATEGORIES = () => async (dispatch) => {
  dispatch(fetchPending());
  return fetch('---')
    .then((response) => response.json())
    .then((data) => dispatch(fetchSuccess(data.results)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchCATEGORIES;

/* düzenleme olucak */
