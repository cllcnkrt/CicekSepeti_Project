import axios from 'axios';
import PRODUCTS from 'constants/productsConstants';

const fetchSuccess = (data) => ({
  type: PRODUCTS.FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: PRODUCTS.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: PRODUCTS.FETCH_PRODUCTS_PENDING,
});

const fetchProducts = () => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .get('http://bootcampapi.techcs.io/api/fe/v1/product/all')
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchProducts;
