import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
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


  render() {
    return (
      <li className="regular-search-result">
        <div className="biz-listing">
          <div className="main-attributes">
            <div className="search-result-image"><Link to={`/businesses/${this.business.id}`}><img src={this.business.image_url} /></Link></div>
            <div>
              <Link className="biz-idx-link" to={`/businesses/${this.business.id}`}>{this.business.name}</Link>
              <div className={`rating-img-${this.business.calculate_rating}`}></div>
              <span className="dollas">{this.chooseDollaSign()}</span>
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
