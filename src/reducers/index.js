import { combineReducers } from 'redux';

import AcceptOfferReducer from './acceptOfferReducer';
import CategoryReducer from './categoryReducer';
import GivenOffersReducer from './givenOffersReducer';
import ProductDetailsReducer from './productDetailsReducer';
import ProductsReducer from './productsReducer';
import PurchaseReducer from './purchaseReducer';
import ReceivedOffersReducer from './receivedOffersReducer';
import sendOfferReducer from './sendOfferReducer';
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
  purchase: PurchaseReducer,
  sendOffer: sendOfferReducer,
  acceptOfferReducer: AcceptOfferReducer,
});
