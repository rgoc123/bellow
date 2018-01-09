import { fetchBusinesses } from './business_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

//async actions
export const updateBounds = bounds => {

  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};


//thunk actions
