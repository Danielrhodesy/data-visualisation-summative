import React, { Component } from 'react';
import Map from './map.js';
import { Button } from 'reactstrap';
import './map.css';

class Help extends Component {
  render() {
      return (
        <div className="help">
          <Map/>
          <Button className="map-home-button button" color="success" size="large" onClick={this.props.changePage.bind(this, 'homePage')}>HOME</Button>
        </div>
      );
  }

  changePage(page) {
      this.setState({
          currentPage: page
      });
  }
}

export default Help
