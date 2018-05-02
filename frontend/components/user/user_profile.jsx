import React from 'react';

class UserProfile extends React.Component {

  constructor(props) {
    debugger
    super(props);
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const user = this.props.user;

    debugger

    if (!user) {
      return null;
    } else {
      return (
        <div className="user-profile">
          {user.id}
          {user.first_name}
          {user.last_name}
          <img src={user.image} />
        </div>
      );
    }
  }

}

export default UserProfile;
