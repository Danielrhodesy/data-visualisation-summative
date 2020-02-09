import React from 'react';
import { Chart } from 'react-google-charts';
import '../../css/carousel.css';

const Slide = (props) => {
  const {
    backgroundColor, credit, content, data, options
  } = props;
  return (
    <>
      <div className="header">
        <div className="paragraph-position">
          <p color="black" className="head-paragraph">
            Who&apos;s getting help?
          </p>
          <p className="paragraph paragraph-one">
            {content}
          </p>
          <p className="credit">{credit}</p>
        </div>
      </div>
      <div className="graph-one graph-position">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="17.7em"
          data={data}
          options={options}
        />
      </div>
    </>
  );
};

export default Slide;
