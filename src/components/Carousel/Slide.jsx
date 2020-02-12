import React from 'react';
import { Chart } from 'react-google-charts';

const Slide = (props) => {
  const {
    background, color, chartType, credit, content, data, options,
  } = props;
  return (
    <div className="carousel__slides" >
      <section className="carousel__header" style={{ background }}>
        <div className="carousel__content">
          <h2 className="carousel__content--heading" style={{ color }}>
            Who&apos;s getting help?
          </h2>
          <p className="carousel__content--content" style={{ color }}>
            {content}
          </p>
          <p className="carousel__content--credit" style={{ color }}>{credit}</p>
        </div>
      </section>
      <section className="carousel__graph">
        <Chart
          style={{ display: 'flex' }}
          chartType={chartType}
          width="100%"
          height="66vh"
          data={data}
          options={options}
        />
      </section>
    </div>
  );
};

export default Slide;
