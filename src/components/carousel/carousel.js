import React, { Component } from 'react';
import './carousel.css';
import { Button } from 'reactstrap';
import Slider from "react-slick";
import { Chart } from "react-google-charts";
import Swipe from 'react-easy-swipe';
const { google } = window.google;

//CAROUSEL COMPONENT BEGINS
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

          var barData = result.arrayOne;
          var dataTable = [["Age", "People"]];
          for (let i = 0; i < barData.length; i++) {
            dataTable.push([barData[i].age, barData[i].people])
          }
          this.setState({
            isLoaded: true,
            data: result,
            barData: dataTable
          });

          var lineData = result.arrayTwo;
          var dataTable = [["Year", "Reports"]];
          for (let i = 0; i < lineData.length; i++) {
            dataTable.push([lineData[i].year, lineData[i].reports])
          }
          this.setState({
            isLoaded: true,
            data: result,
            lineData: dataTable
          });

          var donutData1 = result.arrayThree;
          var dataTable = [["ethnicity", "number"]];
          for (let i = 0; i < donutData1.length; i++) {
            dataTable.push([donutData1[i].ethnicity, donutData1[i].number])
          }
          this.setState({
            isLoaded: true,
            data: result,
            donutData1: dataTable
          });

          var donutData2 = result.arrayFour;
          var dataTable = [["Female", "Male"]];
          for (let i = 0; i < donutData2.length; i++) {
            dataTable.push([donutData2[i].gender, donutData2[i].number])
          }
          this.setState({
            isLoaded: true,
            data: result,
            donutData2: dataTable
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
          <div className="header-container">

            {Slide}
            <div className="graph-background">
              <Slider {...settings} >
              <Swipe
                onSwipeLeft={this.changeSlide.bind(this, 'Slide2')}>
                  <div className="graph1 graph-position" >
                    <Chart
                      chartType="ColumnChart"
                      width="100%"
                      height="17.7em"
                      data={this.state.barData}
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
                    data={this.state.lineData}
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
                    data={this.state.donutData1}
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
                    data={this.state.donutData2}
                    options={donutoptions2}
                  />
                </div>
                </Swipe>
              </Slider>
            </div>
            <div className="slider-background">
            </div>
          <div className="button-container">
            <Button color="success" size="large" onClick={this.props.changePage.bind(this, 'MapPage')}>FIND HELP NEAR YOU</Button>
          </div>
        </div>
      </div>
    )
  }

// CHANGE PAGE
  changePage(page){
    this.setState({
        currentPage: page
    })
  }

//SLIDE GRAPH FUNC
  changeSlide(slide){
    this.setState({
        currentSlide: slide
    })
  }
}
//CAROUSEL COMPONENT ENDS



//BAR CHART OPTIONS
const baroptions = {
  title:'PEOPLE ACCESSING SERVICES',
  titleTextStyle: {color: 'grey', fontName: 'Montserrat'},
  chartArea:{left:65,top:50,width:'75%',height:'65%'},
  legend: {position: 'bottom'},
  colors: ["#5A496A"]
}

// LINE CHART OPTIONS
const lineoptions = {
  curveType: "function",
  title:'REPORTS OF MOOD AND ANXIETY DISORDER',
  titleTextStyle: {color: 'grey', fontName: 'Montserrat'},
  colors: ["#EF5D60"],
  chartArea:{left:65,top:50,width:'70%',height:'65%'},
  legend: {position: 'bottom',}
};

// PIE CHART 1 OPTIONS
const donutoptions1 = {
  pieHole: 0.32,
  title:'SERVICE USE BY ETHNICITY',
  titleTextStyle: {color: 'grey', fontName: 'Montserrat'},
  slices: {0: {color: '#866BB6'}, 1: {color: '#EF5D60'}, 2: {color: '#5A496A'}, 3: {color: '#95BB4D'}},
  chartArea:{left:60,top:80,width:'75%',height:'55%'},
  legend: {position: 'bottom'}
}

// PIE CHART 2 OPTIONS
const donutoptions2 = {
  pieHole: 0.32,
  title: 'SERVICE USE BY GENDER', fontSize: '80px',
  titleTextStyle: {color: 'grey', fontName: 'Montserrat',},
  slices: {0: {color: '#5A496A'}, 1: {color: '#EF5D60'}},
  chartArea:{left:60,top:80,width:'75%',height:'55%'},
  legend: {position: 'bottom'}
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


//SLIDES
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
          <p className="credit">-Ministry of Health - 'Mental Health and Addiction: Service Use 2015/16'</p>
        </div>
      </div>
    )
  }
}



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
            Per capita, Māori are seeking help the most often -- 6450 people per 100,000, compared to 1125 per 100,000 Asian people.
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
            Men and woman are accessing the mental health services at about the same rate.
          </p>
        </div>

      </div>
    );
  }
}



export default Carousel;
