import * as APIUtilReview from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';


//async actions
export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};


//thunk actions
export const fetchReviews = (businessId) => dispatch => {
  return(
    APIUtilReview.fetchReviews(businessId).then(reviews => (
      dispatch(receiveReviews(reviews))
    ))
  );
};

export const createReview = review => dispatch => {
  return (
    APIUtilReview.createReview(review).then(review => (
      dispatch(receiveReview(review))
    ))
  );
};
