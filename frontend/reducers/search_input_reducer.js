import { UPDATE_SEARCH_INPUT } from '../actions/filter_actions';

const searchInputReducer = (state = "", action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case UPDATE_SEARCH_INPUT:
      return action.searchInput;
    default:
      return state;
  }
};

export default searchInputReducer;
