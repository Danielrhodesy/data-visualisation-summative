import React from 'react';
import { Chart } from 'react-google-charts';
import { Col } from 'reactstrap';

const Slide = (props) => {
  const {
    background, color, chartType, credit, content, data, options,
  } = props;
  return (
    <div className="carousel__slides" style={{ background }}>
      <section className="carousel__header">
        <div className="carousel__content">
          <h1 className="carousel__content--heading" style={{ color }}>
            Who&apos;s getting help?
          </h1>
          <p className="carousel__content--content" style={{ color }}>
            {content}
          </p>
          <p className="carousel__content--credit" style={{color}}>{credit}</p>
        </div>
      </section>
      <section className="carousel__graph">
        <Col>
          <Chart
            chartType={chartType}
            width="75%"
            height="75vh"
            data={data}
            options={options}
          />

        </Col>
      </section>
    </div>
  );
};

export default Slide;
