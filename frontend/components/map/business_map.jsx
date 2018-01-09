import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component{

  componentDidMount() {

    const mapOptions = {
      center: { lat: 40.7726, lng: -73.9546 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);

    google.maps.event.addListener(this.map, 'idle', () => {

      const { north, south, east, west } = this.map.getBounds().toJSON();

      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };

      this.props.updateBounds(bounds);
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
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  render() {

    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    );
  }

}

export default BusinessMap;
