import { combineReducers } from 'redux';

import CategoryReducer from './categoryReducer';
import ProductDetailsReducer from './productDetailsReducer';
import ProductsReducer from './productsReducer';
import SignInReducer from './signInReducer';
import SignUpReducer from './signUpReducer';

export default combineReducers({
  categories: CategoryReducer,
  signIn: SignInReducer,
  signUp: SignUpReducer,
  products: ProductsReducer,
  productDetails: ProductDetailsReducer,
});
