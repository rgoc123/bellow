import { combineReducers } from 'redux';

import pricesReducer from './prices_reducer';
import openDeliversReducer from './open_delivers_reducer';
import searchInputReducer from './search_input_reducer';

export default combineReducers({
  prices: pricesReducer,
  openDelivers: openDeliversReducer,
  searchInput: searchInputReducer
});
