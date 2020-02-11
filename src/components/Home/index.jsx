import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
  changePage(page) {
    this.setState(page);
  }

  render() {
    const { changePage } = this.props;
    return (
      <section className="home">
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
      </section>
    );
  }
}

Home.propTypes = {
  changePage: PropTypes.func,
};

Home.defaultProps = {
  changePage: PropTypes.func,
};

export default Home;
