import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  Button
 } from 'reactstrap';

import Home from './components/home/home';
import Carousel from './components/carousel/carousel';
import Map from './components/map/map';
// import { GoogleApiWrapper } from 'google-maps-react';
// import GoogleMapsContainer from './components/map/react-map';

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
