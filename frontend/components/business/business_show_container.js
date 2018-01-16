import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBusiness } from '../../actions/business_actions';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = id => dispatch => {
  return {
    fetchBusiness: id => dispatch(fetchBusiness(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShow));
