function fetchGetRequest(endpoint, id, filters) {
  let fetchGetOptions = { method: 'GET', data: filters, async: false };
  if (id === null) {
    return fetch(`/api/${endpoint}`, fetchGetOptions)
      .then(data => data.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  } else {
    return fetch(`/api/${endpoint}/${id}`, fetchGetOptions)
      .then(data => data.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
};

function fetchPostRequest(endpoint, id, data) {
  let fetchPostOptions = { method: 'POST', data: data };

};

// USER REQUESTS
export const fetchUser = (id, filters = null) => {
  return fetchGetRequest('users', id, filters);
};

// BUSINESS REQUESTS
export const fetchBusinesses = (id = null, filters) => {
  return fetchGetRequest('businesses', id, filters);
};

export const fetchBusiness = (id, filters = null) => {
  return fetchGetRequest('businesses', id, filters);
};

// REVIEWS REQUESTS
export const fetchReviews = (businessId, id = null, filters = null) => {
  return fetchGetRequest(`businesses/${businessId}/reviews`, id, filters);
};

export const fetchReview = (reviewId, id = null, filters = null) => {
  return fetchGetRequest(`reviews/${reviewId}`, id, filters);
};
