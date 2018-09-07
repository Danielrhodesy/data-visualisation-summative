import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { 
>>>>>>> 3c3af0941652cf945b984083615351b05cc474bb
  Button,
  Row,
  Col,
  Carousel
 } from 'reactstrap';
import { Container, Map } from './components/map.js';
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
          <div className="MapContainer">
            <Container/>
            <Map/>
          
          </div>

      </div>
    );
  }
}


export default App;
