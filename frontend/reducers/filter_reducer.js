import { UPDATE_BOUNDS, UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const filterReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_BOUNDS:
      return action.bounds;
    case UPDATE_FILTER:
      return merge({}, state, {[action.filter]: action.value});
    default:
      return state;
  }
};

export default filterReducer;
