import React from 'react';
import '../../css/map.css';

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      zoom: 13,
      maptype: 'roadmap',
      place_formatted: '',
      place_id: '',
      place_location: '',
    };
  }

  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -41.228241, lng: 174.905120 },
      zoom: 5,
      mapTypeId: 'roadmap',
    });

    map.addListener('zoom_changed', () => {
      this.setState({
        zoom: map.getZoom(),
      });
    });

    map.addListener('maptypeid_changed', () => {
      this.setState({
        maptype: map.getMapTypeId(),
      });
    });

    const marker = new window.google.maps.Marker({
      map,
      position: { lat: -41.228241, lng: 174.905120 },
    });

    const inputNode = document.getElementById('pac-input');
    const autoComplete = new window.google.maps.places.Autocomplete(inputNode);


    autoComplete.addListener('place_changed', () => {
      const place = autoComplete.getPlace();
      const { location } = place.geometry;

      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location.toString(),
      });

      map.fitBounds(place.geometry.viewport);
      map.setCenter(location);

      marker.setPlace({
        placeId: place.place_id,
        location,
      });
    });
  }

  render() {
    return (
      <div className="map-container">
        <input className="pac-input" id="pac-input" type="text" placeholder="Enter a location" />
        <div className="map" id="map" />
      </div>
    );
  }
}

export default Map;
