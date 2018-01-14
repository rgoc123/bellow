import React from 'react';
import { Link } from 'react-router-dom';



class ReviewIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  editLink() {
      if (this.props.currentUser.id === this.props.review.user_id) {
        return <Link to={`/businesses/${this.props.review.business_id}/reviews/${this.props.review.id}/edit`}>Edit</Link>;
      }
  }

  render() {
    debugger
    return (
      <div className="review">
        <div className="review-sidebar">
          <div className="avatar-img-placeholder"></div>
          <div>{this.props.review.first_name} {this.props.review.last_name.slice(0,1)}.</div>
        </div>
        <div className="review-wrapper">
          <div><div className={`rating-img-${this.props.review.rating}`}></div>   {this.props.review.updated_at}</div>
          <div>{this.props.review.body}</div>
          {this.editLink()}
        </div>
      </div>
    );

  }
}


export default ReviewIndexItem;
