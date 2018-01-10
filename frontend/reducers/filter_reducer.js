import { combineReducers } from 'redux';

import pricesReducer from './prices_reducer';
import searchInputReducer from './search_input_reducer';

export default combineReducers({
  prices: pricesReducer,
  searchInput: searchInputReducer
});

// import { UPDATE_BOUNDS, UPDATE_FILTER } from '../actions/filter_actions';
// import merge from 'lodash/merge';
//
// const _nullFilters = Object.freeze({
//   bounds: {},
//   prices: [],
//   searchInput: ""
// });
//
// const filterReducer = (state = _nullFilters, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case UPDATE_BOUNDS:
//       return action.bounds;
//     case UPDATE_FILTER:
//       const newFilter = { [action.filter]: action.value };
//       return merge({}, state, newFilter);
//     default:
//       return state;
//   }
// };
//
// export default filterReducer;
