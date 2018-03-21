import React from 'react';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.user = this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    debugger
    return (
      <div>
        {this.user.id}
      </div>
    );
  }

}

export default UserProfile;
