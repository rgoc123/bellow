import { UPDATE_BOUNDS } from '../actions/filter_actions';
import merge from 'lodash/merge';

const filterReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_BOUNDS:
      return action.bounds;
    default:
      return state;
  }
};

export default filterReducer;
