import React, { Component } from 'react';
import Home from './components/home/home';
import GraphPage from './components/carousel/carousel';
// import Carousel from ''

class App extends Component {
  constructor(){
        super();
        this.state = {
            currentPage: 'homePage'
        }
        // this.changeClass = this.changeClass.bind(this);
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

  changePage(page){
    this.setState({
        currentPage: page
    })
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
        <carousel/>
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
