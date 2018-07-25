import { UPDATE_PRICES, CLEAR_FILTERS } from '../actions/filter_actions';

const pricesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_PRICES:
      return action.prices;
    case CLEAR_FILTERS:
      return [];
    default:
      return state;
  }
};

export default pricesReducer;
