import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage, selectPage } from "../../redux/navSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const dispatch = useDispatch();
  const [navOpen, setNavOpen] = useState(false);
  const page = useSelector(selectPage);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-sky-300 shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-sky-900 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap focus:outline-none hover:opacity-75"
              onClick={() => dispatch(changePage("home"))}>
              Going through it?
            </button>
            <button
              className="text-sky-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavOpen(!navOpen)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              `lg:flex flex-grow items-center ${navOpen ? "flex" : "hidden"}`
            }>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <button
                  className={`text-sky-900 rounded-md px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 focus:outline-none ${
                    page === "help" ? "active" : ""
                    }`}
                  onClick={() => dispatch(changePage("help"))}>
                  <span className="mx-2">Find help</span>
                </button>
              </li>
              {/* <li className="nav-item">
                <button
                  className={`text-sky-900 rounded-md px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 focus:outline-none ${
                    page === "stats" ? "active" : ""
                    }`}
                  onClick={() => dispatch(changePage("stats"))}>
                  <span className="mx-2">See stats</span>
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
