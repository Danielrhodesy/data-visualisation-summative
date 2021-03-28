import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import navSlice from "./navSlice";
import statsSlice from "./statsSlice";

const reducer = combineReducers({
  search: searchSlice,
  nav: navSlice,
  stats: statsSlice
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production"
});
