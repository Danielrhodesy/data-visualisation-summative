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
        <main className="h-screen overflow-y-hidden w-screen bg-help bg-right-top">
          <Nav />
          <section className="h-full w-full flex justify-center">
            <div className="h-44 bg-translucent mt-12 p-5 flex flex-col justify-center items-center rounded-md">
              <h1 className="font-semibold prose prose-2xl text-white">
                Going through it?
              </h1>
              <h2 className="prose prose-xl text-white">
                You're not alone.
                Find mental health help near you.
              </h2>
              <button className="btn" onClick={() => dispatch(changePage("help"))}>
                Find help
              </button>
            </div>
          </section>
        </main>
      ))}
    </>
  );
};

export default Home;