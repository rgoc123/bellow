import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

//async actions
export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveSessionErrors = sessionErrors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    sessionErrors
  };
};

//thunk actions
export const signup = user => dispatch => {
  return(APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  )));
};

export const login = user => dispatch => {
  return(APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  )));
};

export const logout = () => dispatch => {
  return(APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  )));
};
