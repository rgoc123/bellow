import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BusinessIndexItem from './business_index_item';
import BusinessMap from '../map/business_map';

class BusinessIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBusinesses();

  }

  render() {
    return (

      <div className="content-container">
        <div className="biz-column-alpha">
          <ul>
            {this.props.businesses.map(
              business => <BusinessIndexItem key={business.id} business={business} />
            )}
          </ul>
        </div>
        <div className="biz-column-bravo">
          <BusinessMap />
        </div>
      </div>

    );

  }

}

export default BusinessIndex;
