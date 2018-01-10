import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/session_actions';
import { updateFilter } from '../../actions/filter_actions';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
