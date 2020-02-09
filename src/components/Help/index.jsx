import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Map from './Map';
import Search from './Search';
import '../../css/map.css';

class Help extends Component {
  changePage(page) {
    this.setState(page);
  }

  render() {
    const { changePage } = this.props;
    return (
      <div className="help">
        <Search />
        <Button className="map-home-button button" color="success" size="large" onClick={() => changePage('homePage')}>HOME</Button>
      </div>
    );
  }
}

export default Help;
