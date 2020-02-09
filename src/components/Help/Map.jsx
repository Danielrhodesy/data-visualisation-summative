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
    const map = new window.google.maps.Map(document.querySelector('.map'), {
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
  }

  render() {
    return (
      <div className="map-container">
        <div className="map" />
      </div>
    );
  }
}

export default Map;
