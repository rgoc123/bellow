import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser } from '../../util/user_api_util';

import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => fetchUser(id)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
