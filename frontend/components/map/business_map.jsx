import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component{

  componentDidMount() {

    const mapOptions = {
      center: { lat: 40.759147, lng: -73.9802785 },
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
    this.props.businesses.forEach(biz => {
      this.MarkerManager.createMarkerFromBusiness(biz);
    });
    // this.MarkerManager.updateMarkers(this.props.businesses);

    google.maps.event.addListener(this.map, 'idle', () => {

      const { north, south, east, west } = this.map.getBounds().toJSON();

      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };

      // this.props.updateBounds(bounds);
    });

  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {

      const { north, south, east, west } = this.map.getBounds();

      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };

      this.props.updateBounds(bounds);
    });
  }

  componentDidUpdate() {
    let prices = this.props.prices;
    let bizzys = this.props.businesses.filter(biz =>
      prices.includes(biz.price)
    );
    let search = this.props.searchInput.toLowerCase();
    let newbizzys;
    if (search !== "") {
      newbizzys = this.props.businesses.filter(biz =>
        biz.name.toLowerCase().includes(search) || biz.cuisines.toLowerCase().includes(search)
      );
    } else {
      newbizzys = [];
    }

    // let allBizzys = bizzys.concat(newbizzys);
    let allBizzys;
    if (prices.length > 0 && search !== "") {
      allBizzys = this.props.businesses.filter(biz =>
        prices.includes(biz.price) && ((biz.name.toLowerCase().includes(search)) || biz.cuisines.toLowerCase().includes(search))
      );
    } else if (prices.length > 0) {
      allBizzys = this.props.businesses.filter(biz =>
        prices.includes(biz.price)
      );
    } else if (search !== "") {
      allBizzys = this.props.businesses.filter(biz =>
        allBizzys = biz.name.toLowerCase().includes(search) || biz.cuisines.toLowerCase().includes(search)
      );
    } else {
      allBizzys = [];
    }

    if (allBizzys.length === 0 && (prices.length > 0 || search !== "")) {
    // if (allBizzys === undefined) {
      this.props.businesses.forEach(biz => {
        if (this.MarkerManager.markers[biz.id]) {
          this.MarkerManager.removeMarker(this.MarkerManager.markers[biz.id]);
        }
      });
    } else if (allBizzys.length === 0) {
      this.props.businesses.forEach(biz => {
        if (this.MarkerManager.markers[biz.id]) {
          this.MarkerManager.removeMarker(this.MarkerManager.markers[biz.id]);
        }
      });
      this.props.businesses.forEach(biz => {
        this.MarkerManager.createMarkerFromBusiness(biz);
      });
    } else {
      this.props.businesses.forEach(biz => {
        if (this.MarkerManager.markers[biz.id]) {
          this.MarkerManager.removeMarker(this.MarkerManager.markers[biz.id]);
        }
      });
      allBizzys.forEach(biz => {
        this.MarkerManager.createMarkerFromBusiness(biz);
      });
    }

  }

  render() {

    return (
      <div id="map-container" style={{position: 'fixed'}} ref={ map => this.mapNode = map }></div>
    );
  }

}

export default BusinessMap;
