import React, { Component } from 'react';
import { Button, Col, Container } from 'reactstrap';
import Slider from 'react-slick';
import Slide from './Slide';

const sliderSettings = {
  arrows: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
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
      error: null,
      isLoaded: false,
    };
  }

  // API request to Node server
  componentDidMount() {
    try {
      fetch('https://raw.githubusercontent.com/sebknight/going-through-it/b0b2a4276219366aa5f5d46c8ee81af4926be692/server/data/data.json')
        .then((res) => res.json())
        .then(
          (result) => {
            const { barData } = result;
            const barDataTable = [['Age', 'People']];
            for (let i = 0; i < barData.length; i++) {
              barDataTable.push([barData[i].age, barData[i].people]);
            }
            this.setState({
              isLoaded: true,
              barData: barDataTable,
            });

            const { lineData } = result;
            const lineDataTable = [['Year', 'Reports']];
            for (let i = 0; i < lineData.length; i++) {
              lineDataTable.push([lineData[i].year, lineData[i].reports]);
            }
            this.setState({
              isLoaded: true,
              lineData: lineDataTable,
            });

            const { donutDataOne } = result;
            const donutOneDataTable = [['Ethnicity', 'Number']];
            for (let i = 0; i < donutDataOne.length; i++) {
              donutOneDataTable.push([donutDataOne[i].ethnicity, donutDataOne[i].number]);
            }
            this.setState({
              isLoaded: true,
              donutDataOne: donutOneDataTable,
            });

            const { donutDataTwo } = result;
            const donutTwoDataTable = [['Female', 'Male']];
            for (let i = 0; i < donutDataTwo.length; i++) {
              donutTwoDataTable.push([donutDataTwo[i].gender, donutDataTwo[i].number]);
            }
            this.setState({
              isLoaded: true,
              donutDataTwo: donutTwoDataTable,
            });
          },
        );
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }
  }

  changePage(page) {
    this.setState(page);
  }

  render() {
    const {
      barData, lineData, donutDataOne, donutDataTwo,
    } = this.state;

    const { changePage } = this.props;
    return (
      // <Container className="stats">
      //   <Col>
      <>
        <Slider {...sliderSettings}>
          <Slide
            background="#866BB6"
            color="white"
            content="171,033 people accessed mental health care and addiction services in 2015 - 16."
            chartType="ColumnChart"
            credit="Ministry of Health - &quot;Mental Health and Addiction: Service Use 2015/16&quot;"
            data={barData}
            options={barOptions}
          />
          <Slide
            background="#95BB4D"
            content="Kiwis are reporting higher rates of psychological distress each year,
            meaning our mental health care services are more important than ever."
            chartType="LineChart"
            credit="Ministry of Health - &quot;New Zealand Health Survey&quot;"
            data={lineData}
            options={lineOptions}
          />
          <Slide
            background="#EF5D60"
            content="Per capita, Māori are seeking help the most often --
            6450 people per 100,000, compared to 1125 per 100,000 Asian people."
            chartType="PieChart"
            credit="Ministry of Health - &quot;Mental Health and Addiction: Service Use 2015/16&quot;"
            data={donutDataOne}
            options={donutOptionsOne}
          />
          <Slide
            background="#5A496A"
            color="white"
            content="Men and women are accessing the mental health services at about the same rate."
            chartType="PieChart"
            credit="Ministry of Health - &quot;Mental Health and Addiction: Service Use 2015/16&quot;"
            data={donutDataTwo}
            options={donutOptionsTwo}
          />
        </Slider>
        <div className="slider-background" />
        <div className="carousel__button-container">
          <Button
            className="button"
            color="success"
            size="large"
            onClick={() => changePage('helpPage')}
          >
            FIND HELP
          </Button>
        </div>
      </>
      //   </Col>
      // </Container>
    );
  }
}

// CAROUSEL COMPONENT ENDS


export default Carousel;
