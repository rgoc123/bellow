import * as APIUtilUser from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

// Actions
export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
};

// Thunks
export const fetchUser = id => dispatch => {
  return (
    APIUtilUser.fetchUser(id).then(user => (
      dispatch(receiveUser(user))
    ))
  );
};
