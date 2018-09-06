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
        <div className="image-container">
          <header className="App-header">
              <h1 className="App-title">Mental Health Foundation</h1>
          </header>

          {/* <img src={hero} className="hero"></img> */}
          <Button className="button" color="success" size="large">CHECK OUT THE STATS</Button>
          <Button className="button" color="success" size="large">FIND HELP NEAR YOU</Button>
        </div>
      </div>

    );
  }
}

export default App;
