export const signup = user => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  }).then((user) => console.log(user), error => console.log(error));
};

export const login = user => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  }).then((user) => console.log(user), error => console.log(error));
};

export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  }).then((user) => console.log(user), error => console.log(error));
};
