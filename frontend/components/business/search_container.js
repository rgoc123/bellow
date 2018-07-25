import { connect } from 'react-redux';

import { fetchBusinesses } from '../../actions/business_actions';
import {
  updateBounds,
  updateFilter,
  updatePrices,
  updateOpenNow,
  updateDelivers,
  updateTakeout,
  clearFilters
} from '../../actions/filter_actions';

import Search from './search';

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses),
    filters: state.ui.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    updatePrices: (prices) => dispatch(updatePrices(prices)),
    updateOpenNow: (value) => dispatch(updateOpenNow(value)),
    updateDelivers: (value) => dispatch(updateDelivers(value)),
    updateTakeout: (value) => dispatch(updateTakeout(value)),
    clearFilters: () => dispatch(clearFilters())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
