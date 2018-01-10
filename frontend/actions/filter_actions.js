import { fetchBusinesses } from './business_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_PRICES = 'UPDATE_PRICES';
export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';

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

export const updatePrices = (prices) => {
  return {
    type: UPDATE_PRICES,
    prices
  };
};

export const updateSearchInput = (searchInput) => {
  return {
    type: UPDATE_SEARCH_INPUT,
    searchInput
  };
};


//thunk actions
