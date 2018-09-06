import React, { Component } from 'react';
import './carousel.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="header">
        <h4 className="headparagraph">
          Whos Getting Help?
        </h4>
        <p className="paragraph">
          171,033 people accessed mental health care and addiction services in 2015 - 16.
        </p>
      </div>
      <div className="graph1">
      </div>
      <div className="carousel">
      </div>
      <div className="footer">
        <Button color="success" size="large">FIND HELP</Button>
      </div>
    )
  }
}
