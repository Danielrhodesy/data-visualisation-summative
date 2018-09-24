import React, { Component } from "react";
import Home from "./components/home/home";
import Carousel from "./components/carousel/carousel";
import Help from "./components/help/help";


class App extends Component {
  constructor(){
        super();
        this.state = {
          currentPage: "homePage"
        }
      this.changePage = this.changePage.bind(this)
    }

  render() {
    var currentPage = this.state.currentPage;
    let page;

    //PAGE NAVIGATION BEGINS
      if(currentPage === "homePage"){
          page = <Home
          {...this.state}
          changePage={this.changePage}
          />
      } else if(currentPage === "carouselPage"){
          page = <Carousel
          {...this.state}
          changePage={this.changePage}/>
      } else if (currentPage === "helpPage") {
        page = <Help
          {...this.state}
          changePage={this.changePage}/>
      } else {
        page = <Page404/>
    }
    //PAGE NAVIGATION ENDS

    return (
      <div className="app">
      <header className="app-header">
       <div className="header-logo" onClick={this.changePage.bind(this, "homePage")}></div>
      </header>
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
        <h1>404</h1>
      );
    }
}

export default App
