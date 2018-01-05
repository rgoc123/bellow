export const fetchBusinesses = () => {
  return $.ajax({
    url: '/api/businesses',
    method: 'GET',
    error: (err) => console.log(err)
  });
};

export const fetchBusiness = id => {
  return $.ajax({
    url: `/api/businesses/${id}`,
    method: 'GET',
    error: (err) => console.log(err)
  });
};
