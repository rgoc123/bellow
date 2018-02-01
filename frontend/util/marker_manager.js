export default class MarkerManager {

  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {

    // Object.keys(businesses).forEach((key) => {
    businesses.forEach((business, idx) => {
      let latLng = ({lat: businesses[idx].lat, lng: businesses[idx].long});
      new google.maps.Marker({
        position: latLng,
        map: this.map
      });
    });
  }

  createMarkerFromBusiness(business) {
    const position = new google.maps.LatLng(business.lat, business.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id
    });

    let markerInfo = '<div>' +
      '<ul>' +
      '<li>' + business.name + '</li>' +
      '<li>' + business.rating + '</li>' +
      '<li>' + business.price + '</li>' +
      '<li>' + business.address + ', ' + business.city + '</li>' +
      '</ul>' +
      '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: markerInfo
    });

    marker.addListener('mouseover', () => {
      infoWindow.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      infoWindow.close();
    });

    this.markers[marker.businessId] = marker;
    return marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }

}
