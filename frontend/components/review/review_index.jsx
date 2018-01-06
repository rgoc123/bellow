import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewIndex extends React.Component {

  

  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    return (
      <div>This works</div>
    );
  }

}

export default ReviewIndex;
