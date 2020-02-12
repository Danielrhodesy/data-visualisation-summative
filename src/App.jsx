import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Carousel from './components/Carousel';
import ErrorPage from './components/ErrorPage';
import Help from './components/Help';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'homePage',
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      currentPage: page,
    });
  }

  render() {
    const { currentPage } = this.state;
    let page;

    // PAGE NAVIGATION BEGINS
    if (currentPage === 'homePage') {
      page = (
        <Home
          {...this.state}
          changePage={this.changePage}
        />
      );
    } else if (currentPage === 'carouselPage') {
      page = (
        <Carousel
          {...this.state}
          changePage={this.changePage}
        />
      );
    } else if (currentPage === 'helpPage') {
      page = (
        <Help
          {...this.state}
          changePage={this.changePage}
        />
      );
    } else {
      page = <ErrorPage />;
    }
    // PAGE NAVIGATION ENDS

    return (
      <main>
        <header>
          <nav className="nav">
            <Button className="nav-button" onClick={() => this.changePage('homePage')}>HOME</Button>
            <Button className="nav-button" onClick={() => this.changePage('helpPage')}>FIND HELP</Button>
            <Button className="nav-button" onClick={() => this.changePage('carouselPage')}>SEE STATS</Button>
          </nav>
        </header>
        {page}
      </main>
    );
  }
}

export default App;
