import { connect } from 'react-redux';
import { fetchBusinesses } from '../actions/business_actions';

import FilterForm from './filter_form';


const mapStateToProps = (state, ownProps) => {
  return(
    {}
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
