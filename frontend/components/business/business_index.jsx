import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BusinessIndexItem from './business_index_item';
import BusinessMap from '../map/business_map';
import MarkerManager from '../../util/marker_manager';

class BusinessIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  filtersChoice() {
    let lowerSearchName = this.props.filters.searchInput.toLowerCase();

    if ((JSON.stringify(this.props.filters.prices) === JSON.stringify([])) && (this.props.filters.searchInput === "") ) {
      return this.props.businesses.map(business => <BusinessIndexItem key={business.id} business={business} />);
    } else if ((this.props.filters.prices.length > 0) && (this.props.filters.searchInput != "")) {
      return this.props.businesses.map(business => {
        let lowerBizName = business.name.toLowerCase();
        if ((this.props.filters.prices.includes(business.price)) && (lowerBizName.includes(lowerSearchName))) {
          return <BusinessIndexItem key={business.id} business={business} />;
        }
      });
    } else if (this.props.filters.prices.length > 0) {
      return this.props.businesses.map(business => {
        if (this.props.filters.prices.includes(business.price)) {
          return <BusinessIndexItem key={business.id} business={business} />;
        }
      });
    } else if (this.props.filters.searchInput != "") {
      return this.props.businesses.map(business => {
        let lowerBizName = business.name.toLowerCase();
        if (lowerBizName.includes(lowerSearchName)) {
          return <BusinessIndexItem key={business.id} business={business} />;
        }
      });
    }
  }

  areBusinesses() {
    if (this.filtersChoice().length === 0) {
      return (
        <li className="no-results">Looks like no results match the search or filter criteria!</li>
        );
    } else {
      return this.filtersChoice();
    }
  }

  render() {
    return (
      <div className="biz-index-content-container">
        <div className="biz-column-alpha">
          <ul>
            {this.areBusinesses()}
          </ul>
        </div>
        <div className="biz-column-bravo">
          <BusinessMap updateBounds={this.props.updateBounds} businesses={this.props.businesses} prices={this.props.filters.prices}/>
        </div>
      </div>

    );

  }

}

export default BusinessIndex;
