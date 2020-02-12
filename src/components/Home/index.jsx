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
        <h1 className="home__heading">
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
        <div className="home__button-container">
          <Button label="see stats" className="button" onClick={() => changePage('carouselPage')}>CHECK OUT THE STATS</Button>
          <Button label="get help" className="button" onClick={() => changePage('helpPage')}>FIND HELP NEAR YOU </Button>
        </div>
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
