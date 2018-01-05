import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
  return (
    <li className="regular-search-result">
      <div className="biz-listing">
        <div className="main-attributes">
          <div className="search-result-image"></div>
          <div>
            <h2>{business.name}</h2>
            <span>Rating: {business.rating}</span>
            <span>Price: {business.price}</span>
          </div>
        </div>
        <div className="secondary-attributes">
          <span>{business.neighborhood}</span>
          <span>{business.address}</span>
          <span>{business.phone_number}</span>
        </div>
      </div>
    </li>
  );
}

export default BusinessIndexItem;