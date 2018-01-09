import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.review.rating,
      body: this.props.review.body
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const review = Object.assign({}, this.state);
    this.props.createReview({
      body: this.state.body,
      rating: this.state.rating,
      user_id: this.props.currentUser.id,
      business_id: this.props.business.id
    });
    this.props.history.push(`/businesses/${this.props.business.id}`);
  }

  componentDidMount() {

  }

  render() {

    if (this.props.business === undefined) {
      return null;
    } else {
      return(
        <div className="content-container">
          <div className="review-form-column-alpha">
            <Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
            <div className="review-form-container">
                <form onSubmit={this.handleSubmit}>
                  <div className="review-form">
                    <input type="text"
                      value={this.rating}
                      onChange={this.update('rating')}
                      placeholder="Rating"></input>
                    <textarea value={this.body}
                      onChange={this.update('body')}
                      placeholder="Your review helps others learn about
                      great local businesses.  Please don't review this business
                      if you received a freebie for writing this review, or if
                      you're connected in any way to the owner or employees."></textarea>
                  </div>
                  <input className="post-review-button" type="submit" value="Post Review"></input>
                </form>
            </div>
          </div>
        </div>
      );
    }
  }

}

export default ReviewForm;
