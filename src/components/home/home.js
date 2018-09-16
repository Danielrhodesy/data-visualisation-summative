import React, { Component } from 'react';
import {
  Button
 } from 'reactstrap';

class Home extends Component {
  render() {

    return (
      <div className="home">
        <h1 className="heading">Going<br/> through it?<br/>You're not<br/> alone.</h1>
        <Button className="first-button button" color="success" size="large" onClick={this.changePage.bind(this, 'CarouselPage')}>CHECK OUT THE STATS</Button>
        <Button className="second-button button" color="success" size="large" onClick={this.changePage.bind(this, 'MapPage')}>FIND HELP NEAR YOU</Button>
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


export default Home;

// onClick={this.changePage.bind(this, 'CarouselPage')}