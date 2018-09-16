import React, { Component } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Carousel
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

      <div className="home">
          <h1 className="heading">Going<br/> through it?<br/>You're not<br/> alone.</h1>
          <Button className="first-button button" color="success" size="large">CHECK OUT THE STATS</Button>
          <Button className="second-button button" color="success" size="large">FIND HELP NEAR YOU</Button>
        </div>
    );
  }
}

export default Home;
