import React, { Component } from 'react';
import Home from './components/home/home';
import Carousel from './components/carousel/carousel';
import {
  Button
 } from 'reactstrap';

class App extends Component {
  constructor(){
        super();
        this.state = {
          currentPage: 'homePage'
        }
    }

  render() {
    var currentPage = this.state.currentPage;
    let page;

      if(currentPage === 'homePage'){
          page = <HomePage/>
      } else if(currentPage === 'carouselPage'){
          page = <CarouselPage/>
      }
    
    return (
      <div className="app">
        {page}
      </div>
    );
  }
  
}

class HomePage extends Component {
  render() {
   
    return (
      <Home/>
    );
  }
}


class CarouselPage extends Component {
  render() {
    return (
      <Carousel/>
    );
  }
}

// class mapPage extends Component {
//     render() {
//       return (
//         <MapPage/>
//       );
//     }
// }

export default App;
