import React, { Component } from 'react';
import { 
  Button,
  Container,
  Row,
  Col,
  Carousel
 } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mental Health Foundation</h1>
        </header>
        <img className="hero" />
        <Button color="success" size="large">SEE THE STATS</Button>
        <Button color="success" size="large">FIND HELP</Button>
      </div>
    );
  }
}

export default App;
