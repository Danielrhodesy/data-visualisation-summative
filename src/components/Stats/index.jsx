import React from "react";
import { useSelector } from "react-redux";
import renderIf from "render-if";
import { selectPage } from "../../redux/navSlice";
import Carousel from "../Carousel";
import Nav from "../Nav"

const Stats = () => {
  const page = useSelector(selectPage);

  return (
    <>
      {renderIf(page === "stats")(() => (
        <main>
          <Nav />
          <section>
            <Carousel />
          </section>
        </main>
      ))}
    </>
  );
};

export default Stats;
