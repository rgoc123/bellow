import { combineReducers } from 'redux';

import pricesReducer from './prices_reducer';
import searchInputReducer from './search_input_reducer';

export default combineReducers({
  prices: pricesReducer,
  searchInput: searchInputReducer
});
