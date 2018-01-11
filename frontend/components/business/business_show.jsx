import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
                <div className={`show-rating-img-${business.rating}`}></div>
                <span>Rating: {business.rating}</span>
                <span>Price: {business.price}</span>
              </div>
              <div className="biz-page-header-right">
                <Link className="write-review-button" to={`/businesses/${business.id}/reviews/new`}><i className="fa fa-star" aria-hidden="true"></i><span id="review-button-text">Write a review</span></Link>
              </div>
            </div>
            <div className="mapbox-container">
              <div className="mapbox">
                <div className="map-img-placeholder">
                  <img className="map-img" alt="map" src={`https://maps.googleapis.com/maps/api/staticmap?center=40.771086,-73.959327&zoom=20&size=400x400&key=AIzaSyCymYcKpJFirE0tB-R5qil-6Hx_nuOVAis&`} />
                </div>
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
