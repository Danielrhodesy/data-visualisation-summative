import React, { Component } from 'react';
import Carousel from './components/Carousel/Carousel';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Help from './components/Help/Help';
import Home from './components/Home/Home';
import { Button } from 'reactstrap';

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
        <header className="app-header">
          <Button onClick={() => this.changePage('homePage')}>Home</Button>
        </header>
        {page}
      </main>
    );
  }
}

export default App;
