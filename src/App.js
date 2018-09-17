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
          page = <Carousel/>
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
    console.log("Test");
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



export default App;
