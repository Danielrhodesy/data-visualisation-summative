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
        <TextSearch />
        <Button className="map-home-button button" color="success" size="large" onClick={() => changePage('homePage')}>HOME</Button>
      </div>
    );
  }
}

export default Help;
