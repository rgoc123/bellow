import React from 'react';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchUser(this.props.match.params.userId);
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
          </div>
        </div>
      );
    }
  }

}

export default UserProfile;
