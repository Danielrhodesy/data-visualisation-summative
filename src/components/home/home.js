import React, { Component } from 'react';
import {
  Button
 } from 'reactstrap';


class Home extends Component {
  render() {
    return (

      <div className="home">
          <h1 className="heading">Going<br/> through it?<br/>You're not alone.</h1>
          <Button className="button" color="success" size="large">CHECK OUT THE STATS</Button>
          <Button className="button" color="success" size="large">FIND HELP NEAR YOU</Button>
        </div>
    );
  }
}

export default Home;
