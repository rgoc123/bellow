import React from 'react';
import { Link } from 'react-router-dom';
import { updateSearchInput } from '../../actions/filter_actions';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.business = this.props.business;
  }

  chooseDollaSign() {
    let dollaSign;

    if (this.business.price === 1) {
      dollaSign = '$';
    } else if (this.business.price === 2) {
      dollaSign = '$$';
    } else if (this.business.price === 3) {
      dollaSign = '$$$';
    } else if (this.business.price === 4) {
      dollaSign = '$$$$';
    }

    return dollaSign;
  }

  indexCuisines(cuisine) {

    this.state.searchInput = cuisine;
    let currentSearch = this.state.searchInput;

    dispatch(updateSearchInput(currentSearch));
    this.props.props.props.history.push('/search');
  }

  render() {
    return (
      <li className="regular-search-result">
        <div className="biz-listing">
          <div className="main-attributes">
            <div className="search-result-image">
              <Link to={`/businesses/${this.business.id}`}>
                <img src={this.business.image_url} />
              </Link>
            </div>
            <div>
              <Link className="biz-idx-link" to={`/businesses/${this.business.id}`}>{this.business.name}</Link>
              <div className={`rating-img-${this.business.calculate_rating}`}></div>
              <div className="biz-third-row">
                <span className="dollas">{this.chooseDollaSign()}</span>
                <span className="dot-span">•</span>
                <span
                  className="biz-index-cuisine"
                  onClick={() => this.indexCuisines(this.business.cuisines)}
                  > {this.business.cuisines}</span>
              </div>
            </div>
          </div>
          <div className="secondary-attributes">
            <span className="neighborhood">{this.business.neighborhood}</span>
            <span>{this.business.address}</span>
            <span>{this.business.city}</span>
            <span>{this.business.phone_number}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default BusinessIndexItem;
