import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {

  componentWillReceiveProps(newProps) {
    debugger
    if (!this.state) {
      this.props.fetchBusiness(this.props.match.params.businessId);
      this.props.fetchReview(this.props.review);

      this.setState(
        {id: this.props.review.id,
        rating: this.props.review.rating,
        body: this.props.review.body,
        classColor: "default"}
      );
    }
  }

  componentWillMount() {
    debugger
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentDidMount() {
    debugger
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReview(this.props.match.params.reviewId);
  }

  constructor(props) {
    debugger
    super(props);

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
    this.oneCheck = this.oneCheck.bind(this);
    this.twoCheck = this.twoCheck.bind(this);
    this.threeCheck = this.threeCheck.bind(this);
    this.fourCheck = this.fourCheck.bind(this);
    this.fiveCheck = this.fiveCheck.bind(this);
    this.clearClass = this.clearClass.bind(this);
    this.reinstateClass = this.reinstateClass.bind(this);
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

  oneCheck() {
    switch (parseInt(this.state.rating)) {
      case 1:
        return "pale-yellow  default";
      case 2:
        return "yellow  default";
      case 3:
        return "orangy  default";
      case 4:
        return "pale-red  default";
      case 5:
        return "red  default";
       default:
        return " default";
    }
  }
  twoCheck() {
    switch (parseInt(this.state.rating)) {
      case 1:
        return " default";
      case 2:
        return "yellow  default";
      case 3:
        return "orangy  default";
      case 4:
        return "pale-red  default";
      case 5:
        return "red  default";
       default:
        return " default";
    }
  }

  threeCheck() {
    switch (parseInt(this.state.rating)) {
      case 1:
        return " default";
      case 2:
        return " default";
      case 3:
        return "orangy  default";
      case 4:
        return "pale-red  default";
      case 5:
        return "red  default";
       default:
        return " default";
    }
  }
  fourCheck() {
    switch (parseInt(this.state.rating)) {
      case 1:
        return " default";
      case 2:
        return " default";
      case 3:
        return " default";
      case 4:
        return "pale-red  default";
      case 5:
        return "red  default";
       default:
        return " default";
    }
  }
  fiveCheck() {
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
        return "  red default";
      default:
        return " default";
    }
  }

  reinstateClass() {
    document.getElementById("five").className = this.fiveCheck();
    document.getElementById("four").className = this.fourCheck();
    document.getElementById("three").className = this.threeCheck();
    document.getElementById("two").className =  this.twoCheck();
    document.getElementById("one").className = this.oneCheck();
  }

  clearClass() {
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
                    <ul className="review-form-rating-list" onMouseOver={this.clearClass} onMouseOut={this.reinstateClass}>
                      <label id="five" className={this.fiveCheck()} >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <input type="radio" name="radio-rating" value="5" onChange={this.update('rating')} />
                      </label>
                      <label id="four" className={this.fourCheck()} >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <input type="radio" name="radio-rating" value="4" onChange={this.update('rating')} />
                      </label>
                      <label id="three" className={this.threeCheck()} >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <input type="radio" name="radio-rating" value="3" onChange={this.update('rating')} />
                      </label>
                      <label id="two" className={this.twoCheck()} >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <input type="radio" name="radio-rating" value="2" onChange={this.update('rating')} />
                      </label>
                      <label id="one" className={this.oneCheck()} >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <input type="radio" name="radio-rating" value="1" onChange={this.update('rating')} />
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
