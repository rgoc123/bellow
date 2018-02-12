import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ReviewIndexContainer from '../review/review_index_container';

class BusinessShow extends React.Component {

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviews(this.props.match.params.businessId);
  }

  reviewLink() {
    const business = this.props.business;
    if (!this.props.currentUser) {
      return <Link className="write-review-button" to="/login"><i className="fa fa-star" aria-hidden="true"></i><span id="review-button-text">Write a review</span></Link>;
    } else {
      return <Link className="write-review-button" to={`/businesses/${business.id}/reviews/new`}><i className="fa fa-star" aria-hidden="true"></i><span id="review-button-text">Write a review</span></Link>;
    }
  }

  bizimg0() {
    if (!this.props.business.image0) {
      return null;
    } else {
      return this.props.business.image0;
    }
  }

  bizimg1() {
    if (!this.props.business.image1) {
      return null;
    } else {
      return this.props.business.image1;
    }
  }

  render() {

    const business = this.props.business;

    if (!business) {
      return null;
    } else {

      let dollaSign;

      if (this.props.business.price === 1) {
        dollaSign = '$';
      } else if (this.props.business.price === 2) {
        dollaSign = '$$';
      } else if (this.props.business.price === 3) {
        dollaSign = '$$$';
      } else if (this.props.business.price === 4) {
        dollaSign = '$$$$';
      }

      return (
        <div>
          <div className="grayness"></div>
          <div className="content-container">
            <div className="top-shelf">
              <div className="biz-page-header">
                <div className="biz-page-header-left">
                  <h1>{business.name}</h1>
                  <div className={`show-rating-img-${business.calculate_rating}`}></div>
                  <span>{dollaSign} • {this.props.business.cuisines}</span>
                </div>
                <div className="biz-page-header-right">
                  {this.reviewLink()}
                </div>
              </div>
              <div className="biz-page-main">
                <div className="mapbox-container">
                  <div className="mapbox">
                    <div className="map-img-placeholder">
                      <img className="map-img" alt="map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${business.lat},${business.long}&zoom=15&size=286x135&markers=color:red|${business.lat},${business.long}|&key=AIzaSyCymYcKpJFirE0tB-R5qil-6Hx_nuOVAis&`} />
                    </div>
                    <ul>
                      <li>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <div className="mapbox-info">
                          <span className="map-address">{business.address}</span>
                          <br></br>
                          <span className="map-address">{business.city}</span>
                          <br></br>
                          <span>{business.neighborhood}</span>
                        </div>
                      </li>
                      <li>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span className="mapbox-info">{business.phone_number}</span>
                      </li>
                      <li>
                        <i className="img-website"></i>
                        <a className="mapbox-info" target="_blank" href={business.website}>{business.website}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="photo-case">
                  <div className="biz-photo"><img alt="bizimage0" src={this.bizimg0()} /></div>
                  <div className="biz-photo"><img src={business.image_url} /></div>
                  <div className="biz-photo"><img alt="bizimage1" src={this.bizimg1()} /></div>
                </div>
              </div>
            </div>
            <div className="bottom-shelf">
              <div className="review-feed">
                <ReviewIndexContainer businessId={this.props.business.id} />
              </div>
              <div className="additional-info">
                <div className="today-info">
                  <ul>
                    <li>
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      <p>Today <strong>11:00 am - 10:00 pm</strong></p>
                    </li>
                    <li>
                      <span className="todays-dollas">{dollaSign}</span>
                      <p>Price range </p>
                    </li>
                  </ul>
                </div>
                <div className="hours">
                  <h5>Hours</h5>
                  <ul>
                    <li>
                      <p className="day">Mon</p>
                      <p>11:00 am - 10:00 pm</p>
                    </li>
                    <li>
                      <p className="day">Tue</p>
                      <p>11:00 am - 10:00 pm</p>
                    </li>
                    <li>
                      <p className="day">Wed</p>
                      <p>11:00 am - 10:00 pm</p>
                    </li>
                    <li>
                      <p className="day">Thu</p>
                      <p>11:00 am - 10:00 pm</p>
                    </li>
                    <li>
                      <p className="day">Fri</p>
                      <p>11:00 am - 10:00 pm</p>
                    </li>
                    <li>
                      <p className="day">Sat</p>
                      <p>11:00 am - 10:00 pm</p>
                    </li>
                    <li>
                      <p className="day">Sun</p>
                      <p>11:00 am - 10:00 pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

}

export default BusinessShow;
