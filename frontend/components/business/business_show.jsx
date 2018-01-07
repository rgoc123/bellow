import React from 'react';

import ReviewIndexContainer from '../review/review_index_container';

class BusinessShow extends React.Component {

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  render() {
    const business = this.props.business;
    if (!business) {
      return null;
    } else {
      return (
        <div className="content-container">
          <div className="top-shelf">
            <div className="biz-page-header">
              <div className="biz-page-header-left">
                <h1>{business.name}</h1>
                <span>Rating: {business.rating}</span>
                <span>Price: {business.price}</span>
              </div>
            </div>
            <div className="mapbox-container">
              <div className="mapbox">
                <div className="map-img-placeholder"></div>
                <span>{business.address}</span>
                <span>{business.phone_number}</span>
              </div>
            </div>
          </div>
          <div className="bottom-shelf">
            <div className="review-feed">
              <ReviewIndexContainer businessId={this.props.business.id} />
            </div>
          </div>
        </div>
      );
    }
  }

}

export default BusinessShow;
