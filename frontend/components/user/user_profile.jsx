import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchUser(this.props.match.params.userId);
  }

  createReviews(user) {
    if (user.reviews) {
      return Object.values(user.reviews).map(review => (
        <li className="user-profile-review">
          <div className="user-profile-review-upper">
            <Link to={`/businesses/${review.business.id}`}>
              <img src={review.image_url} className="user-profile-review-img" />
            </Link>
            <div className="user-profile-review-upper-info">
              <Link className="biz-idx-link" to={`/businesses/${review.business.id}`}>{review.business.name}</Link>
              <div className="biz-third-row">
                <span>{this.chooseDollaSign(review)}</span>
                <span className="dot-span">•</span>
                <span>{review.business.cuisines}</span>
              </div>
              <span>{review.business.address}</span>
              <span>{review.business.city}</span>
            </div>
          </div>
          <div className="user-profile-review-lower">
            <div className={`rating-img-${review.rating} show-review`}></div>
            <span>{review.body}</span>
          </div>
        </li>
      ));
    }
  }

  chooseDollaSign(review) {
    let dollaSign;

    if (review.business.price === 1) {
      dollaSign = '$';
    } else if (review.business.price === 2) {
      dollaSign = '$$';
    } else if (review.business.price === 3) {
      dollaSign = '$$$';
    } else if (review.business.price === 4) {
      dollaSign = '$$$$';
    }

    return dollaSign;
  }

  render() {
    const user = this.props.user;
    if (!user) {
      return null;
    } else {
      let ln = user.last_name || "";
      ln = ln.slice(0,1);
      return (
        <div>
          <div className="grayness-user-prof"></div>
          <div className="content-container">
            <div className="user-profile-top">
              <div className="user-profile-left">
                <img className="user-profile-image" src={user.image} />
              </div>
              <div className="user-profile-right">
                <h1>{user.first_name} {ln}.</h1>
              </div>
            </div>
            <div className="user-profile-bottom">
              <div className="user-profile-nav">
                <h1>{user.first_name}'s Profile</h1>
              </div>
              <div className="user-profile-reviews">
                <h1>Reviews</h1>
                <ul>
                  {this.createReviews(user)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

}

export default UserProfile;
