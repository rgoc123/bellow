import { fetchBusinesses } from './business_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_PRICES = 'UPDATE_PRICES';
export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
export const UPDATE_OPEN_NOW = 'UPDATE_OPEN_NOW';
export const UPDATE_DELIVERS = 'UPDATE_DELIVERS';
export const UPDATE_TAKEOUT = 'UPDATE_TAKEOUT';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

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

export const updateOpenNow = (value) => {
  return {type: UPDATE_OPEN_NOW, value}
}

export const updateDelivers = (value) => {
  return {type: UPDATE_DELIVERS, value}
}

export const updateTakeout = (value) => {
  return {type: UPDATE_TAKEOUT, value}
}

export const updateSearchInput = (searchInput) => {
  return {
    type: UPDATE_SEARCH_INPUT,
    searchInput
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  };
};

//thunk actions
