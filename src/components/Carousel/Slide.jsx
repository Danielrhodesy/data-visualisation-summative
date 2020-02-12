import React from 'react';
import { Chart } from 'react-google-charts';
import renderIf from 'render-if';

const Slide = (props) => {
  const {
    background, color, chartType, credit, content, data, options,
  } = props;
  return (
    <div className="carousel__slides" >
      <section className="carousel__header" style={{ background }}>
        <div className="carousel__content">
          <p style={{ color }}>
            {content}
          </p>
          <p className="carousel__content--credit" style={{ color }}>{credit}</p>
          {renderIf(window.innerWidth < 1200)(() => (
            <p className="carousel__content--credit" style={{ color }}>Swipe to find out more</p>
          ))}
          {renderIf(window.innerWidth >= 1200)(() => (
            <p className="carousel__content--credit" style={{ color }}>Drag to find out more</p>
          ))}
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
