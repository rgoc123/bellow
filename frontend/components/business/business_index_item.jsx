import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {

  let dollaSign;

  if (business.price === 1) {
    dollaSign = '$'
  } else if (business.price === 2) {
    dollaSign = '$$'
  } else if (business.price === 3) {
    dollaSign = '$$$'
  } else if (business.price === 4) {
    dollaSign = '$$$$'
  };

  return (
    <li className="regular-search-result">
      <div className="biz-listing">
        <div className="main-attributes">
          <div className="search-result-image"><Link to={`/businesses/${business.id}`}><img src={business.image_url} /></Link></div>
          <div>
            <Link className="biz-idx-link" to={`/businesses/${business.id}`}>{business.name}</Link>
            <div className={`rating-img-${business.calculate_rating}`}></div>
            <span>{dollaSign}</span>
          </div>
        </div>
        <div className="secondary-attributes">
          <span>{business.neighborhood}</span>
          <span>{business.address}</span>
          <span>{business.city}</span>
          <span>{business.phone_number}</span>
        </div>
      </div>
    </li>
  );
}

export default BusinessIndexItem;
