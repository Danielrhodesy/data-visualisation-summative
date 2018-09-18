import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  Button
 } from 'reactstrap';

import Home from './components/home/home';
import Carousel from './components/carousel/carousel';
import Map from './components/help/map';


class App extends Component {
  constructor(){
        super();
        this.state = {
          currentPage: 'homePage'
        }
      this.changePage = this.changePage.bind(this)
    }

  render() {
    var currentPage = this.state.currentPage;
    let page;

      if(currentPage === 'homePage'){
          page = <Home
          {...this.state}
          changePage={this.changePage}
          />
      } else if(currentPage === 'carouselPage'){
          page = <Carousel
          {...this.state}
          changePage={this.changePage}/>
      } else if (currentPage === 'mapPage') {
        page = <Map
          id="myMap"
          options={{
            center: { lat: 41.0082, lng: 28.9784 },
            zoom: 8
          }}
          onMapLoad={map => {
            var marker = new window.google.maps.Marker({
              position: { lat: 41.0082, lng: 28.9784 },
              map: map,
              title: 'Hello Istanbul!'
            });
          }}
          {...this.state}
          changePage={this.changePage} />
      } else {
        page = <Page404/>
    }

    return (
      <div className="app">
        {page}
      </div>
    );
  }
  changePage(page){
    this.setState({
        currentPage: page
    })
  }
  
}

class Page404 extends Component {
  render() {
    return (
      <div>
          <h2>404</h2>
          <p>Page not found</p>
      </div>
    );
  }
}


export default App;
