import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/session_actions';
import { updateFilter, updatePrices, updateSearchInput } from '../../actions/filter_actions';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updatePrices: (prices) => dispatch(updatePrices(prices)),
  updateSearchInput: (searchInput) => dispatch(updateSearchInput(searchInput))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
