import * as APIUtilBusiness from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';


//async actions
export const receiveBusinesses = businesses => {
  return {
    type: RECEIVE_BUSINESSES,
    businesses
  };
};


//thunk actions
export const fetchBusinesses = () => dispatch => {
  return(
    APIUtilBusiness.fetchBusinesses().then(businesses => (
    dispatch(receiveBusinesses(businesses))
  ))
  );
};
