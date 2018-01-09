import { fetchBusinesses } from './business_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_FILTER = 'UPDATE_FILTER';

//async actions
export const updateBounds = bounds => {

  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

export const updateFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  };
};


//thunk actions
