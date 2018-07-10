function genericGetRequest(endpoint, id = null, filters = null) {
  if (id === null) {
    return $.ajax({
      url: `/api/${endpoint}`,
      method: 'GET',
      data: filters,
      async: false,
      error: (err) => console.log(err)
    });
  } else {
    return $.ajax({
      url: `/api/${endpoint}/${id}`,
      method: 'GET',
      data: filters,
      async: false,
      error: (err) => console.log(err)
    });
  }
};

export const fetchBusinesses = (filters) => {
  let id = null;
  return genericGetRequest('businesses', id, filters);
}
