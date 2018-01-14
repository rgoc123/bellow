export const fetchReviews = businessId => {
  return $.ajax({
    url: `/api/businesses/${businessId}/reviews`,
    method: 'GET'
  });
};

export const createReview = review => {
  debugger
  return $.ajax({
    url: `/api/businesses/${review.business_id}/reviews`,
    method: 'POST',
    data: { review }
  });
};

export const updateReview = review => {
  return $.ajax({
    url: `/api/businesses/${review.business_id}/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  });
};

export const deleteReview = reviewId => {
  return $.ajax({
    method: "DELETE",
    url: `api/reviews/${reviewId}`
  });
};
