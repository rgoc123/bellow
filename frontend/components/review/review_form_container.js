import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';


const mapStateToProps = (state, ownProps) => {

  let review = {
    rating: "",
    body: "",
    business_id: ownProps.match.params.businessId,
    user_id: state.session.currentUser.id
  };

  return {
    formType: "new",
    review,
    business: state.entities.businesses[ownProps.match.params.businessId],
    currentUser: state.session.currentUser
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    createReview: (review) => dispatch(createReview(review))
  };

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
