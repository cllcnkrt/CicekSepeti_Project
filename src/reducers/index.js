import { combineReducers } from 'redux';

import CartReducer from './cart';
import CharactersReducer from './characters';

export default combineReducers({
  characters: CharactersReducer,
  cart: CartReducer,
});
