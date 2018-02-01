
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
      businessId: business.id,
      url: "/#/businesses/" + business.id
    });

    let ratingClass;
    if (business.calculate_rating === 5) {
      ratingClass = "rating-img-5";
    } else if (business.calculate_rating === 4) {
      ratingClass = "rating-img-4";
    } else if (business.calculate_rating === 3) {
      ratingClass = "rating-img-3";
    } else if (business.calculate_rating === 2) {
      ratingClass = "rating-img-2";
    } else if (business.calculate_rating === 1) {
      ratingClass = "rating-img-1";
    } else if (business.calculate_rating === 0) {
      ratingClass = "rating-img-0";
    }

    let dollaSign;
    if (business.price === 1) {
      dollaSign = '$';
    } else if (business.price === 2) {
      dollaSign = '$$';
    } else if (business.price === 3) {
      dollaSign = '$$$';
    } else if (business.price === 4) {
      dollaSign = '$$$$';
    }

    let markerInfo = '<div class="marker">' +
      '<ul>' +
      '<li>' + business.name + '</li>' +
      '<li>' + '<div class="' + ratingClass + '"></div>' + '</li>' +
      '<li>' + dollaSign + '</li>' +
      '<li>' + business.address + '</li>' +
      '<li>' + business.city + '</li>' +
      '<li>' + '<img class="marker-main-image" src="' + business.main_image +'" />' + '</li>' +
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

    marker.addListener('click', () => {
      window.location.href = marker.url;
    });

    this.markers[marker.businessId] = marker;
    return marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }

}
