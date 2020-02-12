import React, { Component } from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const sliderSettings = {
  autoplay: true,
  autoplaySpeed: 10000,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  variableWidth: true,
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

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  // API request
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
      barData, donutDataOne, donutDataTwo,
    } = this.state;

    return (
      <>
        <Slider {...sliderSettings}>
          <Slide
            background="#866BB6"
            color="white"
            chartType="ColumnChart"
            content="171,033 people accessed mental health care and addiction services in 2015 - 16."
            credit="Ministry of Health - &quot;Mental Health and Addiction: Service Use 2015/16&quot;"
            data={barData}
            options={barOptions}
          />
          <Slide
            background="#95BB4D"
            chartType="PieChart"
            content="Per capita, Māori are seeking help the most often --
            6450 people per 100,000, compared to 1125 per 100,000 Asian people."
            credit="Ministry of Health - &quot;Mental Health and Addiction: Service Use 2015/16&quot;"
            data={donutDataOne}
            options={donutOptionsOne}
          />
          <Slide
            background="#5A496A"
            chartType="PieChart"
            color="white"
            content="Men and women are accessing the mental health services at about the same rate."
            credit="Ministry of Health - &quot;Mental Health and Addiction: Service Use 2015/16&quot;"
            data={donutDataTwo}
            options={donutOptionsTwo}
          />
        </Slider>
        <div className="slider-background" />
      </>
    );
  }
}

export default Carousel;
