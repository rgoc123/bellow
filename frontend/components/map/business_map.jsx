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
    let bizzys;
    bizzys = this.props.businesses.filter(biz =>
      prices.includes(biz.price)
    );

    if (bizzys.length === 0) {
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
      bizzys.forEach(biz => {
        this.MarkerManager.createMarkerFromBusiness(biz);
      });
    }
    // this.MarkerManager.updateMarkers(this.props.businesses);
  }

  render() {

    return (
      <div id="map-container" style={{position: 'fixed'}} ref={ map => this.mapNode = map }></div>
    );
  }

}

export default BusinessMap;
