export const fetchReviews = () => {
  return $.ajax({
    url: '/api/reviews',
    method: 'GET'
  });
};
