import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import MapSearch from './MapSearch';
import '../../css/map.css';
import TextSearch from './TextSearch';

class Help extends Component {
  changePage(page) {
    this.setState(page);
  }

  render() {
    const { changePage } = this.props;
    return (
      <div className="help">
        {/* <MapSearch
          google={google}
          center={{lat: 18.5204, lng: 73.8567}}
          height="300px"
          zoom={15}
        /> */}
        <TextSearch />
        <Button className="map-home-button button" color="success" size="large" onClick={() => changePage('homePage')}>HOME</Button>
      </div>
    );
  }
}

export default Help;
