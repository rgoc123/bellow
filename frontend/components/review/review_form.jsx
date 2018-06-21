import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {

  componentWillReceiveProps(newProps) {

    if (!this.state) {
      this.props.fetchBusiness(this.props.match.params.businessId);
      this.props.fetchReview(this.props.review);

      this.setState({
        id: this.props.review.id,
        rating: this.props.review.rating,
        body: this.props.review.body,
        classColor: "default"
      });
    }
  }

  componentWillMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReview(this.props.match.params.reviewId);
  }

  constructor(props) {

    super(props);
    debugger
    if (!this.props.review) {
      this.state = {
        id: this.props.match.params.reviewId,
        rating: "",
        body: "",
        classColor: "default"
      };
    } else {
      this.state = {
        id: this.props.review.id,
        rating: this.props.review.rating,
        body: this.props.review.body,
        classColor: "default"
      };
    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.giveOneStars = this.giveOneStars.bind(this);
    this.giveTwoStars = this.giveTwoStars.bind(this);
    this.giveThreeStars = this.giveThreeStars.bind(this);
    this.giveFourStars = this.giveFourStars.bind(this);
    this.giveFiveStars = this.giveFiveStars.bind(this);
    this.clearRating = this.clearRating.bind(this);
    this.clickedRating = this.clickedRating.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

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

  chooseButtonType() {
    if (this.props.formType === 'new') {
      return "Post Review";
    } else {
      return "Edit Review";
    }
  }

  //The below functions for changing the rating star colors is credited to Corey Ladovsky
  giveOneStars() {
    switch (parseInt(this.state.rating)) {
      case 1:
        return " one-star  default";
      case 2:
        return " two-star  default";
      case 3:
        return " three-star  default";
      case 4:
        return " four-star  default";
      case 5:
        return " five-star  default";
       default:
        return " default";
    }
  }
  giveTwoStars() {
    switch (parseInt(this.state.rating)) {
      case 1:
        return " default";
      case 2:
        return " two-star  default";
      case 3:
        return " three-star  default";
      case 4:
        return " four-star  default";
      case 5:
        return " five-star  default";
       default:
        return " default";
    }
  }
  giveThreeStars() {
    switch (parseInt(this.state.rating)) {
      case 1:
        return " default";
      case 2:
        return " default";
      case 3:
        return " three-star  default";
      case 4:
        return " four-star  default";
      case 5:
        return " five-star  default";
       default:
        return " default";
    }
  }
  giveFourStars() {
    switch (parseInt(this.state.rating)) {
      case 1:
        return " default";
      case 2:
        return " default";
      case 3:
        return " default";
      case 4:
        return " four-star  default";
      case 5:
        return " five-star  default";
      default:
        return " default";
    }
  }
  giveFiveStars() {
    switch (parseInt(this.state.rating)) {
      case 1:
        return "  default";
      case 2:
        return " default";
      case 3:
        return " default";
      case 4:
        return " default";
      case 5:
        return "  five-star default";
      default:
        return " default";
    }
  }

  clickedRating() {
    document.getElementById("five").className = this.giveFiveStars();
    document.getElementById("four").className = this.giveFourStars();
    document.getElementById("three").className = this.giveThreeStars();
    document.getElementById("two").className =  this.giveTwoStars();
    document.getElementById("one").className = this.giveOneStars();
  }

  clearRating() {
    document.getElementById("five").className = " default";
    document.getElementById("four").className = " default" ;
    document.getElementById("three").className = " default";
    document.getElementById("two").className =  " default";
    document.getElementById("one").className = " default";
  }

  render() {
    if (!this.props.review || !this.props.business) {
      return null;
    } else {
      return(
        <div className="content-container">
          <div className="review-form-column-alpha">
            <Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
            <div className="review-form-container">
                <form onSubmit={this.handleSubmit}>
                  <div className="review-form">
                    <ul className="review-form-rating-list" onMouseOver={this.clearRating} onMouseOut={this.clickedRating}>
                      <label id="five" className={this.giveFiveStars()} >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <input type="radio" name="radio-rating" value="5" onChange={this.update('rating')} />
                      </label>
                      <label id="four" className={this.giveFourStars()} >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <input type="radio" name="radio-rating" value="4" onChange={this.update('rating')} />
                      </label>
                      <label id="three" className={this.giveThreeStars()} >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <input type="radio" name="radio-rating" value="3" onChange={this.update('rating')} />
                      </label>
                      <label id="two" className={this.giveTwoStars()} >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <input type="radio" name="radio-rating" value="2" onChange={this.update('rating')} />
                      </label>
                      <label id="one" className={this.giveOneStars()} >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <input type="radio" name="radio-rating" value="1" onChange={this.update('rating')} />
                      </label>
                    </ul>
                    <textarea value={this.state.body}
                      onChange={this.update('body')}
                      placeholder="Your review helps others learn about
                      great local businesses.&#10;Please don't review this business
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
