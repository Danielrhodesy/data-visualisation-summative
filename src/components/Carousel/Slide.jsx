import React from 'react';
import { Chart } from 'react-google-charts';
import '../../css/carousel.css';

const Slide = (props) => {
  const {
    backgroundColor, chartType, credit, content, data, options
  } = props;
  return (
    <div className="carousel__slides" background={backgroundColor}>
      <section className="carousel__header">
        <div className="carousel__content">
          <h1>
            Who&apos;s getting help?
          </h1>
          <p>
            {content}
          </p>
          <p className="carousel__content--credit">{credit}</p>
        </div>
      </section>
      <section className="carousel__graph">
        <Chart
          chartType={chartType}
          width="100%"
          height="50%"
          data={data}
          options={options}
        />
      </section>
    </div>
  );
};

export default Slide;
