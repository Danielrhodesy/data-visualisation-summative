import React, { Component } from 'react';
import './carousel.css';
import {
  Button,
  Container,
  Row,
  Col,
  Carousel
 } from 'reactstrap'; 

class carousel1 extends Component {
  render() {
    return (
      <div className="carousel1">
        <div className="placeholder">
          
        </div>

        <div className="header">
          <div className="paragraph-position">
            <p className="headparagraph">
              Whos Getting Help?
            </p>
            <p className="paragraph">
              171,033 people accessed mental health care and addiction services in 2015 - 16.
            </p>
          </div>
        </div>
        <div className="graph1">
        </div>
        <div className="carousel">
        </div>
        <div className="footer">
          <Button color="success" size="large">FIND HELP</Button>
        </div>
      </div>
    )
  }
}

class carousel2 extends Component {
  render() {
    return (
      <div className="carousel2">
        <div className="placeholder">
          
        </div>

        <div className="header">
          <div className="paragraph-position">
            <p className="headparagraph">
              Whos Getting Help?
            </p>
            <p className="paragraph">
              171,033 people accessed mental health care and addiction services in 2015 - 16.
            </p>
          </div>
        </div>
        <div className="graph1">
        </div>
        <div className="carousel">
        </div>
        <div className="footer">
          <Button color="success" size="large">FIND HELP</Button>
        </div>
      </div>
    )
  }
}


export default carousel1