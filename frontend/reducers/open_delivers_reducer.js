import { UPDATE_OPEN_NOW, UPDATE_DELIVERS, UPDATE_TAKEOUT, CLEAR_FILTERS } from '../actions/filter_actions';
import merge from 'lodash/merge';

let openDeliversState = {
  openNow: false,
  delivers: false,
  takeout: false
}

const openDeliversReducer = (state = openDeliversState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_OPEN_NOW:
      return merge({}, state, {openNow: action.value});
    case UPDATE_DELIVERS:
      return merge({}, state, {delivers: action.value});
    case UPDATE_TAKEOUT:
      return merge({}, state, {takeout: action.value});
    case CLEAR_FILTERS:
      return openDeliversState;
    default:
      return state;
  }
}

export default openDeliversReducer;
