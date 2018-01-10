import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BusinessIndexItem from './business_index_item';
import BusinessMap from '../map/business_map';

class BusinessIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  filtersChoice() {
    if (JSON.stringify(this.props.filters.prices) === JSON.stringify([])) {
      return this.props.businesses.map(business => <BusinessIndexItem key={business.id} business={business} />);
    } else {
      return this.props.businesses.map(business => {
        if (this.props.filters.prices.includes(business.price)) {
          return <BusinessIndexItem key={business.id} business={business} />;
        }
      });
    }
  }

  render() {
    return (
      <div className="biz-index-content-container">
        <div className="biz-column-alpha">
          <ul>
            {this.filtersChoice()}
          </ul>
        </div>
        <div className="biz-column-bravo">
          <BusinessMap updateBounds={this.props.updateBounds} businesses={this.props.businesses} />
        </div>
      </div>

    );

  }

}

export default BusinessIndex;
