import React, { Component } from 'react';
import {
  Button,
  Container,
  Row,
  Col
 } from 'reactstrap';
import './index.css';
// import hero from './hero.jpg';
import Home from './components/home/home';
import { Carousel } from 'react-responsive-carousel';
import CarouselPage from './components/carousel/carousel';
import Map from './components/map/map';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <Map
        api-key='https://maps.googleapis.com/maps/api/js?key=AIzaSyBhrNAnxQp6Jknk4roq8oG4_ygmKPPkLbE'
        onMount={(map, maps) => {
          this.map = map; //Store the google map instance for custom actions. (Outside the react components.)
          this.maps = maps; //Store a reference to the google maps javascript api in case we need some of it's helper methods.
        }}
        optionsConstructor={function (maps) {
          //Options Constructor always has a this context of the options object. To override the default options do the following:
          Object.assign(this, {
            zoom: 4,
            mapTypeId: maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
              position: maps.ControlPosition.LEFT_CENTER
            },
            keyboardShortcuts: true,
            panControl: true,
            panControlOptions: {
              position: maps.ControlPosition.BOTTOM_RIGHT
            },
            mapTypeId: maps.MapTypeId.HYBRID,
            mapTypeControl: true,
            mapTypeControlOptions: {
              position: maps.ControlPosition.LEFT_BOTTOM
            },
            fullscreenControlOptions: {
              position: maps.ControlPosition.RIGHT_BOTTOM
            },
            fullscreenControl: true
          });
        }}
      >
      </Map>
    );
  }
}


export default App;
