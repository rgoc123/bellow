import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';


const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.path === "businesses/:businessId/reviews/new") {
    let review = {rating: "", body: "", business_id: ownProps.match.params.businessId, user_id: state.session.currentUser.id};

    return {
      formType: "new",
      review,
      business: state.business[ownProps.match.params.businessId],
      currentUser: state.session.currentUser
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.path === "/businesses/:businessId/reviews/new") {
    return {
      createReview: (review) => dispatch(createReview(review))
    };
  }
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
