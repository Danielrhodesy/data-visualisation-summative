import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "./sagas";
// import pageSlice from "./slices/pageSlice";
// import carouselSlice from "./slices/carouselSlice";

// const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  search: searchSlice
  // page: pageSlice,
  // carousel: carouselSlice
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production"
});

// sagaMiddleware.run(rootSaga)

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
