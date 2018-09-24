import React, { Component } from 'react';
import './carousel.css';
import {
  Button
 } from 'reactstrap';
import Slider from "react-slick";
import { Chart } from "react-google-charts";
import Swipe from 'react-easy-swipe';
const { google } = window.google;

class Carousel extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentSlide: 'Slide1',
      currentFooter: 'Footer1',
      error: null,
      isLoaded: false,
      data: [],
      firstData: []
    }
  }


  
  componentDidMount() {
    fetch("http://192.168.33.10:5000/data")
      .then(res => res.json())
      .then(
        
        (result) => {


          var firstData = result.arrayOne;
          console.log(result.arrayOne);
          var dataTable = [["Age", "People"]];
          for (let i = 0; i < firstData.length; i++) {
            dataTable.push([firstData[i].age, firstData[i].people])
          }
          this.setState({
            isLoaded: true,
            data: result,
            firstData: dataTable
          });
        },

        (result) => {

          // Fetch each graph through this ( keep looping through each fetch for graph on each page)
          // Change func names


          var firstData = result.arrayOne;
          console.log(result.arrayOne);
          var dataTable = [["Age", "People"]];
          for (let i = 0; i < firstData.length; i++) {
            dataTable.push([firstData[i].age, firstData[i].people])
          }
          this.setState({
            isLoaded: true,
            data: result,
            firstData: dataTable
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    }
   
  render() {

  const { error, isLoaded, data } = this.state;
    if (error) {
      console.log('error');
      
    } else if (!isLoaded) {
      console.log('loading');
    
    } else {
      console.log('Working');
     
    }

    var currentSlide = this.state.currentSlide;
    let Slide;

    if(currentSlide === 'Slide1'){
      Slide = <Slide1/>
    } else if(currentSlide === 'Slide2'){
      Slide = <Slide2/>
    } else if(currentSlide === 'Slide3'){
        Slide = <Slide3/>
    } else if(currentSlide === 'Slide4'){
        Slide = <Slide4/>
    }


    return (
      <div className="graphSlide">
        {/* Slide 1 - Age/Mental Health */}
          <div className="header-container">

            {Slide}

            <div className="graph-background">
              <Slider {...settings} >
              <Swipe
                onSwipeLeft={this.changeSlide.bind(this, 'Slide2')}>
                  <div className="graph1 graph-position" >
                  {/* onSwipe={this.changeSlide.bind(this, 'Slide2')} */}
                    <Chart
                      chartType="ColumnChart"
                      width="100%"
                      height="17.7em"
                      data={this.state.firstData}
                      options={baroptions}
                    />
                  </div>
                </Swipe>
                <Swipe
                onSwipeLeft={this.changeSlide.bind(this, 'Slide3')}
                onSwipeRight={this.changeSlide.bind(this, 'Slide1')}>
                <div className="graph2 graph-position">
                  <Chart
                    chartType="LineChart"
                    width="100%"
                    height="17.7em"
                    data={linedata}
                    options={lineoptions}
                  />
                </div>
                </Swipe>
                <Swipe
                onSwipeLeft={this.changeSlide.bind(this, 'Slide4')}
                onSwipeRight={this.changeSlide.bind(this, 'Slide2')}>
                <div className="graph3 graph-position">
                  <Chart
                    chartType="PieChart"
                    width="100%"
                    height="17.7em"
                    data={donutdata1}
                    options={donutoptions1}
                    
                  />
                </div>
                </Swipe>
                <Swipe
                  onSwipeRight={this.changeSlide.bind(this, 'Slide3')}>
                <div className="graph4 graph-position">
                  <Chart
                    chartType="PieChart"
                    width="100%"
                    height="17.7em"
                    data={donutdata2}
                    options={donutoptions2}
                  />
                </div>
                </Swipe>
              </Slider>
            </div>
            <div className="slider-background">
            </div>
          <div className="button-container">
            <Button color="success" size="large" onClick={this.props.changePage.bind(this, 'MapPage')}>FIND HELP</Button>
          </div>
        </div>
      </div>
    )
  }


  changePage(page){
    this.setState({
        currentPage: page
    })
    console.log("Page Test");
  }

  changeSlide(slide){
    this.setState({
        currentSlide: slide
    })
    console.log("Slide test");
  }
}

class Slide1 extends Component {
  render() {
    return (
      <div className="header header-color1">
        <div className="paragraph-position">
          <p className="headparagraph">
            Who's Getting Help?
          </p>
          <p className="paragraph paragraph1">
            171,033 people accessed mental health care and addiction services in 2015 - 16.
          </p>
        </div>
      </div>
    )
  }
}


const baroptions = {
  legend: {position: 'none'},
  chartArea:{left:65,top:50,width:'75%',height:'65%'}
}



// LINE CHART DATA

const linedata = [
  ["Year", "Reports"],
  ["2011", 56.4],
  ["2012", 58.9],
  ["2013", 65.5],
  ["2014", 61.6],
  ["2015", 66.9],
  ["2016", 72.4]
];

const lineoptions = {
  curveType: "function",
  colors: ["#EF5D60"],
  legend: {position: 'none'},
  chartArea:{left:65,top:50,width:'70%',height:'65%'}
};

// PIE CHART DATA


const donutdata1 = [
  ["Ethnicity", "Number"],
  ["Maori", 45726],
  ["Pacific", 9980],
  ["Asian", 7122],
  ["Other", 108205]  // CSS-style declaration
];

const donutoptions1 = {
  pieHole: 0.32,
  chartArea:{left:60,top:50,width:'70%',height:'50%'},
  legend: {position: 'labeled'}
}

// PIE CHART 2

const donutdata2 = [
  ["Gender", "Number"],
  ["Female", 81645],
  ["Male", 89379]
];

const donutoptions2 = {
  pieHole: 0.32,
  chartArea:{left:60,top:50,width:'70%',height:'50%'},
  legend: {position: 'right'}
};



//CAROUSEL

var settings = {
  arrows: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};



class Slide2 extends Component {
  render() {
    return (
      <div className="header header-color2">
        <div className="paragraph-position">
          <p className="paragraph paragraph2">
            Kiwis are reporting higher reates of psychological distress each year, meaning our <b>mental health care services are more important than ever.</b>
          </p>
        </div>
      </div>
    );
  }
}



class Slide3 extends Component {
  render() {
    return (

      <div className="header header-color3">
        <div className="paragraph-position">
          <p className="headparagraph">
            Who's Getting Help?
          </p>
          <p className="paragraph paragraph3">
            Per capita, Maori are seeking help the most often -- 6450 people per 100,000, compared to 1125 per 100,000 Asian people.
          </p>
        </div>
      </div>
    );
  }
}


class Slide4 extends Component {
  render() {
    return (

      <div className="header header-color4">
        <div className="paragraph-position">
          <p className="headparagraph">
            Who's Getting Help?
          </p>
          <p className="paragraph paragraph3">
            Per capita, Maori are seeking help the most often -- 6450 people per 100,000, compared to 1125 per 100,000 Asian people.
          </p>
        </div>

      </div>
    );
  }
}



export default Carousel;
