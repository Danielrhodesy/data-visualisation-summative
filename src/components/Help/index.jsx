import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Col, Button } from 'reactstrap';
import '../../css/help.css';
import TextSearch from './TextSearch';

class Help extends Component {
  changePage(page) {
    this.setState(page);
  }

  render() {
    const { changePage } = this.props;
    return (
      <Container className="help">
        <Col>
          <TextSearch />
          <Button className="map-home-button button" color="success" size="large" onClick={() => changePage('homePage')}>HOME</Button>
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
