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
    let emptyPricesCheck = (JSON.stringify(this.props.filters.prices) === JSON.stringify([]));

    let retBizzies, tempBizzies = [];

    makeBizIndex = makeBizIndex.bind(this);

    function makeBizIndex(businesses) {
      return businesses.map(business => (
        <BusinessIndexItem key={business.id}
        business={business}
        updateSearchInput={this.props.updateSearchInput}
        props={this.props} />)
      );
    }

    if ((emptyPricesCheck) &&
    (this.props.filters.searchInput === "") &&
    (this.props.filters.openDelivers.delivers === false) &&
    (this.props.filters.openDelivers.openNow === false)) {
      return makeBizIndex(this.props.businesses);
    } else {
      if (!emptyPricesCheck) {
        tempBizzies = this.props.businesses.filter(business => (
          this.props.filters.prices.includes(business.price))
        );
      } else {
        tempBizzies = this.props.businesses;
      }
      if (lowerSearchName) {
        retBizzies = tempBizzies.filter(business => (
          business.name.toLowerCase().includes(lowerSearchName) ||
          business.cuisines.toLowerCase().includes(lowerSearchName))
        );
      } else {
        retBizzies = tempBizzies;
      }
      if (this.props.filters.openDelivers.delivers === true) {
        retBizzies = retBizzies.filter(biz => (
          biz.delivers === true
        ));
      }
      if (this.props.filters.openDelivers.openNow === true) {
        console.log(Date.now());
        // if now.hour < 12
        let currentHour = new Date(Date.now()).getHours();
        retBizzies = retBizzies.filter(biz => (
          currentHour < 12 ? biz.openNow === 1 : biz.openNow === 2
        ));

        // retBizzies = retBizzies.filter(biz => (
        //   Date.new() biz.openNow === true
        // ));
      }
    }

    if (retBizzies.length > 0) {
      return makeBizIndex(retBizzies);
    } else {
      return (
        <p>If your search takes longer than one second, we don't have that restaurant or cuisine in our database. We apologize for the inconvience.</p>
      );
    }
  }

  render() {
    return (
      <div className="biz-index-content-container">
        <div className="biz-column-alpha">
          <ul className="biz-index-ul">
            {this.filtersChoice()}
          </ul>
        </div>
        <div className="biz-column-bravo">
          <BusinessMap updateBounds={this.props.updateBounds}
          businesses={this.props.businesses}
          prices={this.props.filters.prices}
          searchInput={this.props.filters.searchInput}
          openDelivers={this.props.filters.openDelivers} />
        </div>
      </div>
    );
  }

}

export default BusinessIndex;
