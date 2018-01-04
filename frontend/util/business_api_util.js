export const fetchBusinesses = () => {
  return $.ajax({
    url: '/api/businesses',
    method: 'GET',
    error: (err) => console.log(err)
  });
};
