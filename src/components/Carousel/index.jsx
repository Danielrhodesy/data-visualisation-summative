import React from "react";
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";
import {
  selectBarData,
  selectDonutDataOne,
  selectDonutDataTwo,
  selectBarOptions,
  selectDonutOptionsOne,
  selectDonutOptionsTwo
} from "../../redux/statsSlice";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = () => {
  const barData = useSelector(selectBarData);
  const donutDataOne = useSelector(selectDonutDataOne);
  const donutDataTwo = useSelector(selectDonutDataTwo);

  const barOptions = useSelector(selectBarOptions);
  const donutOptionsOne = useSelector(selectDonutOptionsOne);
  const donutOptionsTwo = useSelector(selectDonutOptionsTwo);

  return (
    <section className="w-full h-64">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
        infinite={true}>
        <Slider>
          <Slide index={0}>
            <Chart chartType="ColumnChart" options={barOptions} data={barData} />
          </Slide>
          <Slide index={1}>
            <Chart
              chartType="PieChart"
              options={donutOptionsOne}
              data={donutDataOne}
            />
          </Slide>
          <Slide index={2}>
            <Chart
              chartType="PieChart"
              options={donutOptionsTwo}
              data={donutDataTwo}
            />
          </Slide>
          <DotGroup />
        </Slider>
        <ButtonBack className="btn">Back</ButtonBack>
        <ButtonNext className="btn">Next</ButtonNext>
      </CarouselProvider>
    </section>
  );
};

export default Carousel;
