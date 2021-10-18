import { combineReducers } from 'redux';

import CategoryReducer from './categoryReducer';
import GivenOffersReducer from './givenOffersReducer';
import ProductDetailsReducer from './productDetailsReducer';
import ProductsReducer from './productsReducer';
import ReceivedOffersReducer from './receivedOffersReducer';
import SignInReducer from './signInReducer';
import SignUpReducer from './signUpReducer';

export default combineReducers({
  categories: CategoryReducer,
  signIn: SignInReducer,
  signUp: SignUpReducer,
  products: ProductsReducer,
  productDetails: ProductDetailsReducer,
  givenOffers: GivenOffersReducer,
  receivedOffers: ReceivedOffersReducer,
});
