import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions';
import { updateSearchInput, clearSearch } from '../../actions/filter_actions';

import NewSearch from './new_search';

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses),
    searchInput: state.ui.filters.searchInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusiness: id => dispatch(fetchBusiness(id)),
    updateSearchInput: () => dispatch(updateSearchInput()),
    clearSearch: () => dispatch(clearSearch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSearch);
