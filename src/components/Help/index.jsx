import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Col, Button } from 'reactstrap';
import Search from './Search';

class Help extends Component {
  changePage(page) {
    this.setState(page);
  }

  render() {
    const { changePage } = this.props;
    return (
      <Container className="help">
        <Col>
          <Search />
          <Button className="map-home-button button" color="success" size="large" onClick={() => changePage('carouselPage')}>SEE THE STATS</Button>
        </Col>
      </Container>
    );
  }
}

Help.propTypes = {
  changePage: PropTypes.func,
};

Help.defaultProps = {
  changePage: PropTypes.func,
};

export default Help;
