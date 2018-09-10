import React, { Component } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Carousel
 } from 'reactstrap';
import Home from './components/home/home';

class App extends Component {
  render() {
    return (

      <div className="app">
        <header className="app-header">
          <div className="header-logo"></div>
        </header>
        <Home/>
      </div>
    );
  }
}

export default App;
