import React from 'react';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchUser(this.props.match.params.userId);
  }

  createReviews(user) {
    if (user.reviews) {
      return Object.values(user.reviews).map(review => (
        <li>
          <img src={review.business.imag_url} />
          <span>{review.business.name}</span>
          <span>{this.chooseDollaSign(review)}</span>
          <span className="dot-span">•</span>
          <span></span>
          <span>{review.rating}</span>
          <span>{review.body}</span>
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
    debugger
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
