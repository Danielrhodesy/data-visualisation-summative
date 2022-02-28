import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import navSlice from "./navSlice";

const reducer = combineReducers({
  search: searchSlice,
  nav: navSlice,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production"
});
