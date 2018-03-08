import * as APIUtilReview from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS';

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

export const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  };
};

export const clearReviews = () => {
  return {
    type: CLEAR_REVIEWS
  }
}


//thunk actions
export const fetchReviews = (businessId) => dispatch => {
  return(
    APIUtilReview.fetchReviews(businessId).then(reviews => (
      dispatch(receiveReviews(reviews))
    ))
  );
};

export const fetchReview = (reviewId) => dispatch => (
  APIUtilReview.fetchReview(reviewId).then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => {
  return (
    APIUtilReview.createReview(review).then(review => (
      dispatch(receiveReview(review))
    ))
  );
};

export const updateReview = review => dispatch => {
  return (
    APIUtilReview.updateReview(review).then(review => (
      dispatch(receiveReview(review))
    ))
  );
};

export const deleteReview = reviewId => dispatch => {
  return (
    APIUtilReview.deleteReview(reviewId).then(review => (
      dispatch(removeReview(reviewId))
    ))
  );
};
