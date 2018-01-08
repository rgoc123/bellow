import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BusinessMap extends React.Component{

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7726, lng: -73.9546 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    );
  }

}

export default BusinessMap;
