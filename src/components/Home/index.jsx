import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
  changePage(page) {
    this.setState(page);
  }

  render() {
    const { changePage } = this.props;
    return (
      <div className="home">
        <h1 className="heading">
          Going
          <br />
          {' '}
          through it?
          <br />
          You&apos;re not
          <br />
          {' '}
          alone.
        </h1>
        <Button className="button" color="success" size="large" onClick={() => changePage('carouselPage')}>CHECK OUT THE STATS</Button>
        <Button className="button" color="success" size="large" onClick={() => changePage('helpPage')}>FIND HELP NEAR YOU</Button>
      </div>
    );
  }
}

export default Home;
