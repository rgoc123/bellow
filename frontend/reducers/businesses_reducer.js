import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      return a;
    default:
      return state;
  }
};

export default businessesReducer;
