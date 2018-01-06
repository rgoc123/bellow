import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';


const mapStateToProps = (state) => {
  return {
    reviews: Object.values(state.entities.reviews)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
