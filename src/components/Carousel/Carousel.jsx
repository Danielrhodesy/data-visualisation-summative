import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Chart } from 'react-google-charts';
import Slider from 'react-slick';
import Swipe from 'react-easy-swipe';
import Slide from './Slide';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SlideFour from './SlideFour';
import '../../css/carousel.css';

// CHANGE PAGE FUNCTION
const changePage = (page) => {
  this.setState({
    currentPage: page,
  });
};

// SLIDER SETTINGS
const settings = {
  arrows: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const barOptions = {
  title: 'SERVICE USE BY AGE',
  titleTextStyle: { color: 'grey', fontName: 'Montserrat' },
  chartArea: {
    left: 65, top: 50, width: '75%', height: '65%',
  },
  legend: { position: 'none' },
  colors: ['#5A496A'],
};

// LINE CHART OPTIONS
const lineOptions = {
  curveType: 'function',
  title: 'REPORTS OF MOOD AND ANXIETY DISORDERS',
  titleTextStyle: { color: 'grey', fontName: 'Montserrat' },
  colors: ['#EF5D60'],
  chartArea: {
    left: 65, top: 50, width: '70%', height: '65%',
  },
  legend: { position: 'none' },
};

// PIE CHART 1 OPTIONS
const donutOptionsOne = {
  pieHole: 0.32,
  title: 'SERVICE USE BY ETHNICITY',
  titleTextStyle: { color: 'grey', fontName: 'Montserrat' },
  slices: {
    0: { color: '#866BB6' }, 1: { color: '#EF5D60' }, 2: { color: '#5A496A' }, 3: { color: '#95BB4D' },
  },
  chartArea: {
    left: 60, top: 80, width: '75%', height: '55%',
  },
  legend: { position: 'bottom' },
};

// PIE CHART 2 OPTIONS
const donutOptionsTwo = {
  pieHole: 0.32,
  title: 'SERVICE USE BY GENDER',
  fontSize: '80px',
  titleTextStyle: { color: 'grey', fontName: 'Montserrat' },
  slices: { 0: { color: '#5A496A' }, 1: { color: '#EF5D60' } },
  chartArea: {
    left: 60, top: 80, width: '75%', height: '55%',
  },
  legend: { position: 'bottom' },
};
// CHART OPTIONS END

// Carousel
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentSlide: 'SlideOne',
      error: null,
      isLoaded: false,
    };
  }

  // API request to Node server
  componentDidMount() {
    fetch('http://localhost:5000/data')
      .then((res) => res.json())
      .then(
        (result) => {
          const { barData } = result;
          let dataTable = [['Age', 'People']];
          for (let i = 0; i < barData.length; i++) {
            dataTable.push([barData[i].age, barData[i].people]);
          }
          this.setState({
            isLoaded: true,
            barData: dataTable,
          });

          const { lineData } = result;
          dataTable = [['Year', 'Reports']];
          for (let i = 0; i < lineData.length; i++) {
            dataTable.push([lineData[i].year, lineData[i].reports]);
          }
          this.setState({
            isLoaded: true,
            lineData: dataTable,
          });

          const { donutDataOne } = result;
          dataTable = [['Ethnicity', 'Number']];
          for (let i = 0; i < donutDataOne.length; i++) {
            dataTable.push([donutDataOne[i].ethnicity, donutDataOne[i].number]);
          }
          this.setState({
            isLoaded: true,
            donutDataOne: dataTable,
          });

          const { donutDataTwo } = result;
          dataTable = [['Female', 'Male']];
          for (let i = 0; i < donutDataTwo.length; i++) {
            dataTable.push([donutDataTwo[i].gender, donutDataTwo[i].number]);
          }
          this.setState({
            isLoaded: true,
            donutDataTwo: dataTable,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const {
      barData, lineData, donutDataOne, donutDataTwo,
    } = this.state;
    return (
      <div className="graph-slide">
        {/* <div className="header-container"> */}
          {/* <div className="graph-background"> */}
          <Slider {...settings}>
            {/* <Swipe
                onSwipeLeft={() => this.changeSlide('SlideTwo')}
              > */}
            <Slide
              backgroundcolor="#866BB6"
              content="171,033 people accessed mental health care and addiction services in 2015 - 16."
              credit="Ministry of Health - &quot;Mental Health and Addiction: Service Use 2015/16&quot;"
              data={barData}
              options={barOptions}
            />
            {/* </Swipe>
              <Swipe
                onSwipeLeft={() => this.changeSlide(this, 'SlideThree')}
                onSwipeRight={() => this.changeSlide(this, 'SlideOne')}
              > */}
            <SlideTwo />
            <div className="graph-two graph-position">
              <Chart
                chartType="LineChart"
                width="100%"
                height="17.7em"
                data={lineData}
                options={lineOptions}
              />
            </div>
            {/* </Swipe>
              <Swipe
                onSwipeLeft={() => this.changeSlide(this, 'SlideFour')}
                onSwipeRight={() => this.changeSlide(this, 'SlideTwo')}
              > */}
            <SlideThree />
            <div className="graph-three graph-position">
              <Chart
                chartType="PieChart"
                width="100%"
                height="17.7em"
                data={donutDataOne}
                options={donutOptionsOne}
              />
            </div>
            {/* </Swipe>
              <Swipe */}
            {/* onSwipeRight={() => this.changeSlide(this, 'SlideThree')}
              > */}
            <SlideFour />
            <div className="graph-four graph-position">
              <Chart
                chartType="PieChart"
                width="100%"
                height="17.7em"
                data={donutDataTwo}
                options={donutOptionsTwo}
              />
            </div>
            {/* </Swipe> */}
          </Slider>
          {/* </div> */}
          <div className="slider-background" />
          <div className="button-container">
            <Button
              className="button"
              color="success"
              size="large"
              onClick={() => changePage(this, 'helpPage')}
            >
              FIND HELP
            </Button>
          </div>
        </div>
      // </div>
    );
  }
}

// CAROUSEL COMPONENT ENDS


export default Carousel;
