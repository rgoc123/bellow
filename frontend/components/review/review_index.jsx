import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    if (this.props.reviews === undefined) {
      return (
        null
      );
    } else {
      if (this.props.reviews.length === 0) {
        return (
          <div className="unreviewed">
            <h1>This business hasn't been reviewed yet.<br></br>Be the first!</h1>
          </div>
        );
      } else {
        return (
          <ul>
            {this.props.reviews.map(
              review => <ReviewIndexItem currentUser={this.props.currentUser} key={review.id} review={review} deleteReview={this.props.deleteReview} />
            )}
          </ul>
        );
      }
    }
  }

}

export default ReviewIndex;
