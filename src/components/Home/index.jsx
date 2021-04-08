import React from "react";
import Nav from "../Nav";
import renderIf from "render-if";
import { useSelector, useDispatch } from "react-redux";
import { selectPage } from "../../redux/navSlice";
import { changePage } from "../../redux/navSlice";

const Home = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  return (
    <>
      {renderIf(page === "home")(() => (
        <section className="h-screen overflow-y-hidden w-screen bg-home bg-cover bg-top">
          <Nav />
          <div className="h-full w-full flex justify-center">
            <div className="h-44 bg-translucent mt-20 py-28 px-10 flex flex-col justify-center items-center rounded-md">
              <h1 data-testid="Home-heading" className="font-semibold prose prose-2xl text-white">
                Going through it?
              </h1>
              <h2 data-testid="Home-subheading" className="prose prose-xl text-white">
                You're not alone.
                <br />
                Find mental health help near you.
              </h2>
              <button data-testid="Home-button" className="btn" onClick={() => dispatch(changePage("help"))}>
                Find help
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Home;
