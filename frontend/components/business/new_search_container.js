import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBusinesses } from '../../actions/business_actions';
import { updateSearchInput } from '../../actions/filter_actions';

import NewSearch from './new_search';

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    updateSearchInput: () => dispatch(updateSearchInput())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSearch);
