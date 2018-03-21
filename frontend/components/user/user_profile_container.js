import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser } from ''

import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = id => dispatch => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShow));
