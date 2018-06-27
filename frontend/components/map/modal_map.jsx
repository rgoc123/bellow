import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class ModalMap extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {

    const mapOptions = {
      center: { lat: this.props.lat, lng: this.props.long },
      zoom: 15
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.createSingleMarker(this.props.lat, this.props.long);

    google.maps.event.addListener(this.map, 'idle', () => {

      const { north, south, east, west } = this.map.getBounds().toJSON();

      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };

      // this.props.updateBounds(bounds);
    });

  }

  render() {
    return (
      <div id="modal-map" ref={ map => this.mapNode = map }></div>
    );
  }

}

export default ModalMap;
