import { UPDATE_PRICES } from '../actions/filter_actions';

const pricesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_PRICES:
      return action.prices;
    default:
      return state;
  }
};

export default pricesReducer;
