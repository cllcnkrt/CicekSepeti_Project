import { combineReducers } from 'redux';

import CategoryReducer from './category';

export default combineReducers({
  category: CategoryReducer,
});
