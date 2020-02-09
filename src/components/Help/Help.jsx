import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Map from './Map';
import '../../css/map.css';

class Help extends Component {
  changePage(page) {
    this.setState({
      currentPage: page,
    });
  }

  render() {
    return (
      <div className="help">
        <Map />
        <Button className="map-home-button button" color="success" size="large" onClick={this.props.changePage.bind(this, 'homePage')}>HOME</Button>
      </div>
    );
  }
}

export default Help;
