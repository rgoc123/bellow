import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review }) => {
  return (
    <div className="review">
      <div className="review-sidebar">
        <div className="avatar-img-placeholder"></div>
      </div>
      <div className="review-wrapper">
        <div>Rating: {review.rating}</div>
        <div>{review.body}</div>
      </div>
    </div>
  );
}


export default ReviewIndexItem;
