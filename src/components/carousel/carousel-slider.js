import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
import { Chart } from "react-google-charts";

    // BAR CHART DATA

    const bardata = [
        ["Age", "People", { role: "style" }],
        ["Under 15", 20000, "#5A496A"],
        ["16 - 24", 45000, " #5A496A"],
        ["25 - 34", 37000, " #5A496A"],
        ["35 - 44", 21000, " #5A496A"],
        ["45 - 54", 19000, " #5A496A"],
        ["55 - 64", 15000, "#5A496A"],
        ["64+", 12000, " #5A496A"]
      ];
      
      const baroptions = {
        legend: {position: 'none'},
        chartArea:{left:65,top:50,width:'75%',height:'65%'}
      }
      
      // LINE CHART DATA
      
      const linedata = [
        ["Year", "Reports"],
        ["2010", 45],
        ["2011", 54],
        ["2012", 58],
        ["2013", 63]
      ];
      
      const lineoptions = {
        curveType: "function",
        colors: ["#EF5D60"],
        legend: {position: 'none'},
        chartArea:{left:65,top:50,width:'70%',height:'65%'}
      };
      
      

      class carouselSlider extends Component {
        render() {
          return (
            <Carousel>
                        <div className="graph1 graph-position">
                        <Chart
                            chartType="ColumnChart"
                            width="100%"
                            height="17.8em"
                            data={bardata}
                            options={baroptions}
                        />
                        </div>
                        <div className="graph2 graph-position">
                        <Chart
                            chartType="LineChart"
                            width="100%"
                            height="17.8em"
                            data={linedata}
                            options={lineoptions}
                        />
                        </div>
            </Carousel>
            );
        }
    }

export default carouselSlider
