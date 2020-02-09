import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
  changePage(page) {
    this.setState({
      currentPage: page,
    });
  }

  render() {
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
        <Button className="button" color="success" size="large" onClick={this.props.changePage.bind(this, 'carouselPage')}>CHECK OUT THE STATS</Button>
        <Button className="button" color="success" size="large" onClick={this.props.changePage.bind(this, 'helpPage')}>FIND HELP NEAR YOU</Button>
      </div>
    );
  }
}

export default Home;
