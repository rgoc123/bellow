import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review }) => {
  return (
    <div>{review.body}</div>
  );
}


export default ReviewIndexItem;
