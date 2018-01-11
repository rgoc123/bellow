import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review }) => {
  return (
    <div className="review">
      <div className="review-sidebar">
        <div className="avatar-img-placeholder"></div>
        <div>{review.first_name} {review.last_name.slice(0,1)}.</div>
      </div>
      <div className="review-wrapper">
        <div><div className={`rating-img-${review.rating}`}></div>   {review.updated_at}</div>
        <div>{review.body}</div>
      </div>
    </div>
  );
}


export default ReviewIndexItem;
