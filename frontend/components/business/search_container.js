import { connect } from 'react-redux';

import { fetchBusinesses } from '../../actions/business_actions';
import { updateBounds, updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
