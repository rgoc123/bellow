import * as APIUtilReview from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';


//async actions
export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};


//thunk actions
export const fetchReviews = () => dispatch => {
  return(
    APIUtilReview.fetchReviews().then(reviews => (
      dispatch(receiveReviews(reviews))
    ))
  );
};
