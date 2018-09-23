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
      bardata: []
    }
  }



  componentDidMount() {
    fetch("http://192.168.33.10:5000/data")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
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
      console.log(data);
      function populateChart(){
        //for loop through JSON
        for (var i = 0; i < data.length; i++) {
          var importedBarData = {
            age: data[i].age,
            people: data[i].people
          }
        data.push(importedBarData)
        }
      console.log(data);

      }
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
                      data={data}
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
            <Button color="success" size="large" onClick={this.props.changePage.bind(this, 'MapPage')}>FIND HELP NEAR YOU</Button>
          </div>
        </div>
      </div>
    )
  }


  // FOR LOOP each

  //  loadData(data) {
  //   // load json data
  //   $.each(data, function (index, row) {
  //     data.addRow([
  //       new Date(row.insert_date),
  //       parseFloat(row.age),
  //       parseFloat(row.hum)
  //     ]);
  //   });
  // }

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
            Kiwis are reporting higher rates of mood and anxiety disorders each year, meaning our <b>mental health care services are more important than ever.</b>
          </p>
          <p className="credit">-Ministry of Health - Ministry of Health - 'New Zealand Health Survey'</p>
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
            Per capita, Maori are seeking the most help  -- 6450 people per 100,000, compared to 1125 per 100,000 Asian people.
          </p>
          <p className="credit">-Ministry of Health - 'Mental Health and Addiction: Service Use 2015/16'</p>
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
            Men and women are accessing the mental health services at about the same rate.
          </p>
          <p className="credit">-Ministry of Health - 'Mental Health and Addiction: Service Use 2015/16'</p>
        </div>

      </div>
    );
  }
}



//CAROUSEL

var settings = {
  arrows: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};




const baroptions = {
  title:'PEOPLE ACCESSING SERVICES',
  titleTextStyle: {color: 'grey', fontName: 'Montserrat'},
  chartArea:{left:65,top:50,width:'75%',height:'65%'},
  legend: {position: 'bottom'},
  colors: ["#5A496A"]
}



// LINE CHART DATA

const linedata = [
  ["Year", "Percentage By Year (15yrs and older)"],
  ["2011", 12.7],
  ["2012", 16.3],
  ["2013", 16.4],
  ["2014", 17.4],
  ["2015", 18.8],
  ["2016", 19.9]
];

const lineoptions = {
  curveType: "function",
  title:'REPORTS OF MOOD AND ANXIETY DISORDER',
  titleTextStyle: {color: 'grey', fontName: 'Montserrat'},
  colors: ["#EF5D60"],
  chartArea:{left:65,top:50,width:'70%',height:'65%'},
  legend: {position: 'bottom',}
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
  title:'SERVICE USE BY ETHNICITY',
  titleTextStyle: {color: 'grey', fontName: 'Montserrat'},
  slices: {0: {color: '#866BB6'}, 1: {color: '#EF5D60'}, 2: {color: '#5A496A'}, 3: {color: '#95BB4D'}},
  chartArea:{left:60,top:80,width:'75%',height:'55%'},
  legend: {position: 'bottom'}
}

// PIE CHART 2

const donutdata2 = [
  ["Gender", "Number"],
  ["Female", 81645],
  ["Male", 89379]
];

const donutoptions2 = {
  pieHole: 0.32,
  // title: position: 'bottom',
  title: 'SERVICE USE BY GENDER', fontSize: '80px',
  titleTextStyle: {color: 'grey', fontName: 'Montserrat',},
  slices: {0: {color: '#5A496A'}, 1: {color: '#EF5D60'}},
  chartArea:{left:60,top:80,width:'75%',height:'55%'},
  legend: {position: 'bottom'}
};


export default Carousel;
