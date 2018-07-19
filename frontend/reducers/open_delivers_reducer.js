import { UPDATE_OPEN_NOW, UPDATE_DELIVERS } from '../actions/filter_actions';
import merge from 'lodash/merge';

let openDeliversState = {
  openNow: false,
  delivers: false,
}

const openDeliversReducer = (state = openDeliversState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_OPEN_NOW:
      return merge({}, state, {openNow: action.value});
    case UPDATE_DELIVERS:
      return merge({}, state, {delivers: action.value});
    default:
      return state;
  }
}

export default openDeliversReducer;
