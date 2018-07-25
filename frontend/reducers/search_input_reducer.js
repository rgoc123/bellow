import { UPDATE_SEARCH_INPUT, CLEAR_FILTERS } from '../actions/filter_actions';

const searchInputReducer = (state = "", action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_SEARCH_INPUT:
      return action.searchInput;
    case CLEAR_FILTERS:
      return "";
    default:
      return state;
  }
};

export default searchInputReducer;
