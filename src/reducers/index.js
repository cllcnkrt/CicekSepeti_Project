import { combineReducers } from 'redux';

import CategoryReducer from './category';
import SignInReducer from './signIn';
import SignUpReducer from './signUpReducer';

export default combineReducers({
  category: CategoryReducer,
  signIn: SignInReducer,
  signUp: SignUpReducer,
});
