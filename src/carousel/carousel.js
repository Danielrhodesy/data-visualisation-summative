import React, { Component } from 'react';
import './carousel.css';
import {
  Button,
  Container,
  Row,
  Col,
  Carousel
 } from 'reactstrap';
import { Chart } from "react-google-charts";


class carousel extends Component {
  render() {
    return (
      <div className="carousel">

        {/* PAGE 1 - Age/Mental Health */}

        <div className="page1">
          <div className="placeholder">
          </div>
          <div className="header header-color1">
            <div className="paragraph-position">
              <p className="headparagraph">
                Whos Getting Help?
              </p>
              <p className="paragraph paragraph1">
                171,033 people accessed mental health care and addiction services in 2015 - 16.
              </p>
            </div>
          </div>
          <div className="graph1 graph-position">
            <Chart
              chartType="ScatterChart"
              data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
              width="100%"
              height="17.8em"
              legendToggle
            />
          </div>
          <div className="carousel">
          </div>
          <div className="footer footer-color1">
            <Button color="success" size="large">FIND HELP</Button>
          </div>
        </div>

        {/* Page 2 - Mental Health/Year */}

        <div className="page2">
          <div className="placeholder">
          </div>
          <div className="header header-color2">
            <div className="paragraph-position">
              <p className="paragraph paragraph2">
                Kiwis are reporting higher reates of psychological distress each year, meaning our <b>mental health care services are more important than ever.</b>
              </p>
            </div>
          </div>
          <div className="graph2 graph-position">
          </div>
          <div className="carousel">
          </div>
          <div className="footer footer-color2">
            <Button color="success" size="large">FIND HELP</Button>
          </div>
        </div>

        {/* Page 3 - Mental Health/Ethnicity */}

        <div className="page3">
          <div className="placeholder">
          </div>
          <div className="header header-color3">
            <div className="paragraph-position">
              <p className="headparagraph">
                Whos Getting Help?
              </p>
              <p className="paragraph paragraph3">
                Per capita, Maori are seeking help the most often -- 6450 people per 100,000, compared to 1125 per 100,000 Asian people.
              </p>
            </div>
          </div>
          <div className="graph3 graph-position">
          </div>
          <div className="carousel">
          </div>
          <div className="footer footer-color3">
            <Button color="success" size="large">FIND HELP</Button>
          </div>
        </div>

        {/* Page 4 - Metal Health/Sex */}

        <div className="page4">
          <div className="placeholder">
          </div>
          <div className="header header-color4">
            <div className="paragraph-position">
              {/* <p className="headparagraph">
                Whos Getting Help?
              </p> */}
              <p className="paragraph paragraph4">
                Kiwis are reporting higher reates of psychological distress each year, meaning our <b>mental health care services are more important than ever.</b>
              </p>
            </div>
          </div>
          <div className="graph4 graph-position">
          </div>
          <div className="carousel">
          </div>
          <div className="footer footer-color4">
            <Button color="success" size="large">FIND HELP</Button>
          </div>
        </div>
      </div>
    )
  }
}




export default carousel