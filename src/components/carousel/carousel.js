import React, { Component } from "react";
import "./carousel.css";
import { Button } from "reactstrap";
import Slider from "react-slick";
import { Chart } from "react-google-charts";
import Swipe from "react-easy-swipe";

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentSlide: "SlideOne",
      error: null,
      isLoaded: false,
      data: [],
      firstData: []
    }
  }

  //API REQUEST TO NODE SERVER
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

          var donutDataOne = result.arrayThree;
          var dataTable = [["ethnicity", "number"]];
          for (let i = 0; i < donutDataOne.length; i++) {
            dataTable.push([donutDataOne[i].ethnicity, donutDataOne[i].number])
          }
          this.setState({
            isLoaded: true,
            data: result,
            donutDataOne: dataTable
          });

          var donutDataTwo = result.arrayFour;
          var dataTable = [["Female", "Male"]];
          for (let i = 0; i < donutDataTwo.length; i++) {
            dataTable.push([donutDataTwo[i].gender, donutDataTwo[i].number])
          }
          this.setState({
            isLoaded: true,
            data: result,
            donutDataTwo: dataTable
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

    if(currentSlide === "SlideOne"){
      Slide = <SlideOne/>
    } else if(currentSlide === "SlideTwo"){
      Slide = <SlideTwo/>
    } else if(currentSlide === "SlideThree"){
        Slide = <SlideThree/>
    } else if(currentSlide === "SlideFour"){
        Slide = <SlideFour/>
    }

    return (
      <div className="graphSlide">
          <div className="header-container">
            {Slide}
            <div className="graph-background">
              <Slider {...settings} >
              <Swipe
                onSwipeLeft={this.changeSlide.bind(this, "SlideTwo")}>
                  <div className="graph-one graph-position" >
                    <Chart
                      chartType="ColumnChart"
                      width="100%"
                      height="17.7em"
                      data={this.state.barData}
                      options={barOptions}
                    />
                  </div>
                </Swipe>
                <Swipe
                onSwipeLeft={this.changeSlide.bind(this, "SlideThree")}
                onSwipeRight={this.changeSlide.bind(this, "SlideOne")}>
                <div className="graph-two graph-position">
                  <Chart
                    chartType="LineChart"
                    width="100%"
                    height="17.7em"
                    data={this.state.lineData}
                    options={lineOptions}
                  />
                </div>
                </Swipe>
                <Swipe
                onSwipeLeft={this.changeSlide.bind(this, "SlideFour")}
                onSwipeRight={this.changeSlide.bind(this, "SlideTwo")}>
                <div className="graph-three graph-position">
                  <Chart
                    chartType="PieChart"
                    width="100%"
                    height="17.7em"
                    data={this.state.donutDataOne}
                    options={donutOptionsOne}

                  />
                </div>
                </Swipe>
                <Swipe
                  onSwipeRight={this.changeSlide.bind(this, "SlideThree")}>
                <div className="graph-four graph-position">
                  <Chart
                    chartType="PieChart"
                    width="100%"
                    height="17.7em"
                    data={this.state.donutDataTwo}
                    options={donutOptionsTwo}
                  />
                </div>
                </Swipe>
              </Slider>
            </div>
            <div className="slider-background">
            </div>
          <div className="button-container">
            <Button className="button" color="success" size="large" onClick={this.props.changePage.bind(this, "helpPage")}>FIND HELP</Button>
          </div>
        </div>
      </div>
    )
  }

// CHANGE PAGE FUNCTION
  changePage(page){
    this.setState({
        currentPage: page
    })
  }

//SLIDE GRAPH FUNCTION
  changeSlide(slide){
    this.setState({
        currentSlide: slide
    })
  }
}

//CAROUSEL COMPONENT ENDS

//BAR CHART OPTIONS
const barOptions = {
  title:"SERVICE USE BY AGE",
  titleTextStyle: {color: "grey", fontName: "Montserrat"},
  chartArea:{left:65,top:50,width:"75%",height:"65%"},
  legend: {position: "none"},
  colors: ["#5A496A"]
}

// LINE CHART OPTIONS
const lineOptions = {
  curveType: "function",
  title:"REPORTS OF MOOD AND ANXIETY DISORDERS",
  titleTextStyle: {color: "grey", fontName: "Montserrat"},
  colors: ["#EF5D60"],
  chartArea:{left:65,top:50,width:"70%",height:"65%"},
  legend: {position: "none",}
};

// PIE CHART 1 OPTIONS
const donutOptionsOne = {
  pieHole: 0.32,
  title:"SERVICE USE BY ETHNICITY",
  titleTextStyle: {color: "grey", fontName: "Montserrat"},
  slices: {0: {color: "#866BB6"}, 1: {color: "#EF5D60"}, 2: {color: "#5A496A"}, 3: {color: "#95BB4D"}},
  chartArea:{left:60,top:80,width:"75%",height:"55%"},
  legend: {position: "bottom"}
}

// PIE CHART 2 OPTIONS
const donutOptionsTwo = {
  pieHole: 0.32,
  title: "SERVICE USE BY GENDER", fontSize: "80px",
  titleTextStyle: {color: "grey", fontName: "Montserrat",},
  slices: {0: {color: "#5A496A"}, 1: {color: "#EF5D60"}},
  chartArea:{left:60,top:80,width:"75%",height:"55%"},
  legend: {position: "bottom"}
};
//CHART OPTIONS END

//CAROUSEL
var settings = {
  arrows: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

//CAROUSEL ENDS

//SLIDES
class SlideOne extends Component {
  render() {
    return (
      <div className="header header-color-one">
        <div className="paragraph-position">
          <p className="head-paragraph">
            Who's Getting Help?
          </p>
          <p className="paragraph paragraph-one">
            171,033 people accessed mental health care and addiction services in 2015 - 16.
          </p>
          <p className="credit">Ministry of Health - "Mental Health and Addiction: Service Use 2015/16"</p>
        </div>
      </div>
    )
  }
}

class SlideTwo extends Component {
  render() {
    return (
      <div className="header header-color-two">
        <div className="paragraph-position">
          <p className="paragraph paragraph-two">
            Kiwis are reporting higher rates of psychological distress each year, meaning our <b>mental health care services are more important than ever.</b>
          </p>
          <p className="credit">Ministry of Health - "New Zealand Health Survey"</p>
        </div>
      </div>
    );
  }
}

class SlideThree extends Component {
  render() {
    return (
      <div className="header header-color-three">
        <div className="paragraph-position">
          <p className="head-paragraph">
            Who's Getting Help?
          </p>
          <p className="paragraph paragraph-three">
            Per capita, Māori are seeking help the most often -- 6450 people per 100,000, compared to 1125 per 100,000 Asian people.
          </p>
          <p className="credit">Ministry of Health - "Mental Health and Addiction: Service Use 2015/16"</p>
        </div>
      </div>
    );
  }
}

class SlideFour extends Component {
  render() {
    return (
      <div className="header header-color-four">
        <div className="paragraph-position">
          <p className="head-paragraph">
            Who's Getting Help?
          </p>
          <p className="paragraph paragraph-four">
            Men and woman are accessing the mental health services at about the same rate.
          </p>
          <p className="credit">Ministry of Health - "Mental Health and Addiction: Service Use 2015/16"</p>
        </div>
      </div>
    );
  }
}

//SLIDES END

export default Carousel
