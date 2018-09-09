import React, { Component } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Carousel
 } from 'reactstrap';
import './index.css';
// import hero from './hero.jpg';
import Home from './components/home/home';

class App extends Component {


  render() {
    return (


      <div className="app">
        <header className="app-header">
          <div className="head-logo"></div>
        </header>
        <Home/>
      </div>

    );
  }
}

export default App;
