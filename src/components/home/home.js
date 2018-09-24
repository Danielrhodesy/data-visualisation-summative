import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="heading">Going<br/> through it?<br/>You're not<br/> alone.</h1>
        <Button className="first-button button" color="success" size="large" onClick={this.props.changePage.bind(this, 'carouselPage')}>CHECK OUT THE STATS</Button>
        <Button className="second-button button" color="success" size="large" onClick={this.props.changePage.bind(this, 'helpPage')}>FIND HELP NEAR YOU</Button>
      </div>
    );
  }

  changePage(page){
    this.setState({
        currentPage: page
    })
  }
}

export default Home;
