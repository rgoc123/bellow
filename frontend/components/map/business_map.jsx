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
    let tempMarkersKeys = Object.keys(this.MarkerManager.markers);
    tempMarkersKeys.forEach(key => {
      this.MarkerManager.removeMarker(this.MarkerManager.markers[key]);
    })

    this.props.businesses.forEach(biz => {
      this.MarkerManager.createMarkerFromBusiness(biz);
    });
  }

  render() {
    return (
      <div id="map-container" style={{position: 'fixed'}} ref={ map => this.mapNode = map }></div>
    );
  }

}

export default BusinessMap;
