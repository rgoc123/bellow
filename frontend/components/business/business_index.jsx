import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BusinessIndexItem from './business_index_item';
import BusinessMap from '../map/business_map';
import MarkerManager from '../../util/marker_manager';

class BusinessIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
    this.props.clearReviews();
  }

  filtersChoice() {
    let lowerSearchName = this.props.filters.searchInput.toLowerCase();

    if ((JSON.stringify(this.props.filters.prices) === JSON.stringify([])) && (this.props.filters.searchInput === "") ) {
      return this.props.businesses.map(business => <BusinessIndexItem key={business.id} business={business} updateSearchInput={this.props.updateSearchInput} props={this.props} />);
    } else if ((this.props.filters.prices.length > 0) && (this.props.filters.searchInput != "")) {
      return this.props.businesses.map(business => {
        let lowerBizName = business.name.toLowerCase();
        let lowerCuisine = business.cuisines.toLowerCase();
        if ((this.props.filters.prices.includes(business.price)) && ((lowerBizName.includes(lowerSearchName)) || lowerCuisine.includes(lowerSearchName))) {
          return <BusinessIndexItem key={business.id} business={business} updateSearchInput={this.props.updateSearchInput} props={this.props} />;
        }
      });
    } else if (this.props.filters.prices.length > 0) {
      return this.props.businesses.map(business => {
        if (this.props.filters.prices.includes(business.price)) {
          return <BusinessIndexItem key={business.id} business={business} updateSearchInput={this.props.updateSearchInput} props={this.props} />;
        }
      });
    } else if (this.props.filters.searchInput != "") {
      return this.props.businesses.map(business => {
        let lowerBizName = business.name.toLowerCase();
        let lowerCuisine = business.cuisines.toLowerCase();
        if (lowerBizName.includes(lowerSearchName) || lowerCuisine.includes(lowerSearchName)) {
          return <BusinessIndexItem key={business.id} business={business} updateSearchInput={this.props.updateSearchInput} props={this.props} />;
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
          <BusinessMap updateBounds={this.props.updateBounds} businesses={this.props.businesses} prices={this.props.filters.prices} searchInput={this.props.filters.searchInput}/>
        </div>
      </div>

    );

  }

}

export default BusinessIndex;
