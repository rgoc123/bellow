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

    this.markers[marker.businessId] = marker;
  }

}
