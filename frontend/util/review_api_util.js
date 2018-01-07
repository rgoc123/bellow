export const fetchReviews = (businessId) => {
  return $.ajax({
    url: `/api/businesses/${businessId}/reviews`,
    method: 'GET'
  });
};

export const createReview = review => {
  return $.ajax({
    url: `/api/businesses/${businessId}/review`,
    method: 'POST',
    data: { review }
  });
};
