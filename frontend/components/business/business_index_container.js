import { connect } from 'react-redux';

import { fetchBusinesses } from '../../actions/business_actions';
import BusinessIndex from './business_index';

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
