import React, { Component } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Carousel
 } from 'reactstrap';
import './App.css';
// import hero from './hero.jpg';

class App extends Component {
  render() {
    return (


      <div className="App">
        <div className="headLogo"></div>
        <div className="image-container">
          <header className="App-header">
              <h1 className="App-title">Going<br></br> through it?<br/>You're not alone.</h1>
          </header>
          <Button className="button" color="success" size="large">CHECK OUT THE STATS</Button>
          <Button className="button" color="success" size="large">FIND HELP NEAR YOU</Button>
        </div>
      </div>

    );
  }
}

export default App;
