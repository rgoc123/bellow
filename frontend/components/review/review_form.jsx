import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.review.id,
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

    if (this.props.formType === 'new') {
      this.props.createReview({
        body: this.state.body,
        rating: this.state.rating,
        user_id: this.props.currentUser.id,
        business_id: this.props.business.id
      }).then(() => this.props.history.push(`/businesses/${this.props.business.id}`));
    } else {
      this.props.updateReview({
        id: this.state.id,
        body: this.state.body,
        rating: this.state.rating,
        user_id: this.props.currentUser.id,
        business_id: this.props.business.id
      }).then(() => this.props.history.push(`/businesses/${this.props.business.id}`));
    }
  }

  componentDidMount() {

  }

  chooseButtonType() {
    if (this.props.formType === 'new') {
      return "Post Review";
    } else {
      return "Edit Review";
    }
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
                    <ul className="review-form-rating-list">
                      <label>
                        <input type="radio" name="radio-rating" value="1" onChange={this.update('rating')} />1
                      </label>
                      <label>
                        <input type="radio" name="radio-rating" value="2" onChange={this.update('rating')} />2
                      </label>
                      <label>
                        <input type="radio" name="radio-rating" value="3" onChange={this.update('rating')} />3
                      </label>
                      <label>
                        <input type="radio" name="radio-rating" value="4" onChange={this.update('rating')} />4
                      </label>
                      <label>
                        <input type="radio" name="radio-rating" value="5" onChange={this.update('rating')} />5
                      </label>
                    </ul>
                    <textarea value={this.body}
                      onChange={this.update('body')}
                      placeholder="Your review helps others learn about
                      great local businesses.  Please don't review this business
                      if you received a freebie for writing this review, or if
                      you're connected in any way to the owner or employees."></textarea>
                  </div>
                  <input className="post-review-button" type="submit" value={this.chooseButtonType()}></input>
                </form>
            </div>
          </div>
        </div>
      );
    }
  }

}

export default ReviewForm;
