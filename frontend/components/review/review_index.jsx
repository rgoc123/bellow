import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    return (
      <ul>
        {this.props.reviews.map(
          review => <ReviewIndexItem key={review.id} review={review} />
        )}
      </ul>

    );
  }

}

export default ReviewIndex;
