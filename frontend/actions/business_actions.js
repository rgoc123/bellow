import * as APIUtilBusiness from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';


//async actions
export const receiveBusinesses = businesses => {
  return {
    type: RECEIVE_BUSINESSES,
    businesses
  };
};

export const receiveBusiness = business => {
  return {
    type: RECEIVE_BUSINESS,
    business
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

export const fetchBusiness = id => dispatch => {
  return(
    APIUtilBusiness.fetchBusiness(id).then(business => (
    dispatch(receiveBusiness(business))
  ))
  );
};
