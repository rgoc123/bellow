import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchReviews(this.props.businessId);
  }

  render() {
    debugger
    if (this.props.reviews === undefined) {
      return null;
    } else {
      return (
        <ul>
          {this.props.reviews.map(
            review => <ReviewIndexItem currentUser={this.props.currentUser} key={review.id} review={review} />
          )}
        </ul>
      );
    }
  }

}

export default ReviewIndex;
