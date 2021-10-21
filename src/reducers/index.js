import { combineReducers } from 'redux';

import AcceptOfferReducer from './account/acceptOfferReducer';
import cancelOfferReducer from './account/cancelOfferReducer';
import GivenOffersReducer from './account/givenOffersReducer';
import ReceivedOffersReducer from './account/receivedOffersReducer';
import rejectOfferReducer from './account/rejectOfferReducer';
import SignInReducer from './authorization/signInReducer';
import SignUpReducer from './authorization/signUpReducer';
import BrandReducer from './brandReducer';
import CategoryReducer from './categoryReducer';
import ColorReducer from './colorReducer';
import ProductDetailsReducer from './product/productDetailsReducer';
import ProductsReducer from './product/productsReducer';
import PurchaseReducer from './product/purchaseReducer';
import sendOfferReducer from './product/sendOfferReducer';
import StatusReducer from './statusReducer';

export default combineReducers({
  acceptOffer: AcceptOfferReducer,
  cancelOffer: cancelOfferReducer,
  givenOffers: GivenOffersReducer,
  receivedOffers: ReceivedOffersReducer,
  rejectOffer: rejectOfferReducer,

  signIn: SignInReducer,
  signUp: SignUpReducer,

  productDetails: ProductDetailsReducer,
  products: ProductsReducer,
  purchase: PurchaseReducer,
  sendOffer: sendOfferReducer,

  categories: CategoryReducer,
  brands: BrandReducer,
  colors: ColorReducer,
  status: StatusReducer,
});
