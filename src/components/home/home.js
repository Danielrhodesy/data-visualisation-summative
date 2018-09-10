import React, { Component } from 'react';
import {
  Button
 } from 'reactstrap';


class Home extends Component {
  render() {
    return (

      <div className="home">
        <div className="image-container">
          <h1 className="app-title">Going<br></br> through it?<br/>You're not alone.</h1>
          <Button className="button" color="success" size="large">CHECK OUT THE STATS</Button>
          <Button className="button" color="success" size="large">FIND HELP NEAR YOU</Button>
        </div>
      </div>

    );
  }
}

export default Home;
