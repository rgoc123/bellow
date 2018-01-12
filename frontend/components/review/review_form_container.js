import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createReview, updateReview } from '../../actions/review_actions';
import ReviewForm from './review_form';


const mapStateToProps = (state, ownProps) => {

  if (ownProps.match.path.includes("new")) {
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
  } else if (ownProps.match.path.includes("edit")) {
    return {
      formType: "edit",
      review: state.entities.reviews[ownProps.match.params.reviewId],
      business: state.entities.businesses[ownProps.match.params.businessId],
      currentUser: state.session.currentUser
    };
  }

};

const mapDispatchToProps = (dispatch, ownProps) => {

  if (ownProps.match.path.includes("new")) {
    return {
      createReview: (review) => dispatch(createReview(review))
    };
  } else {
    return {
      updateReview: (review) => dispatch(updateReview(review))
    };
  }

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
