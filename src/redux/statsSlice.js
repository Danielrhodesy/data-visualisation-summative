// TODO: implement
// import { createSlice } from "@reduxjs/toolkit";

// export const statsSlice = createSlice({
//   name: "stats",
//   initialState: {
//     data: {
//       barData: [
//         ["Age", "People"],
//         ["Under 15", 25661],
//         ["15 - 24", 40436],
//         ["25 - 34", 30505],
//         ["35 - 44", 25623],
//         ["45 - 54", 21824],
//         ["55 - 64", 10561],
//         ["65+", 14423]
//       ],
//       donutDataOne: [
//         ["Ethnicity", "Number"],
//         ["Māori", 45726],
//         ["Pacific", 9980],
//         ["Asian", 7122],
//         ["Pākehā/Other", 108205]
//       ],
//       donutDataTwo: [
//         ["Gender", "Number"],
//         ["Female", 81654],
//         ["Male", 89379]
//       ]
//     },
//     options: {
//       barOptions: {
//         title: "SERVICE USE BY AGE",
//         titleTextStyle: { color: "grey" },
//         chartArea: {
//           // left: 65,
//           // top: 50,
//           width: "100%",
//           height: "100%"
//         },
//         legend: { position: "none" },
//         colors: ["#5A496A"]
//       },
//       donutOptionsOne: {
//         pieHole: 0.32,
//         title: "SERVICE USE BY ETHNICITY",
//         titleTextStyle: { color: "grey" },
//         slices: {
//           0: { color: "#866BB6" },
//           1: { color: "#EF5D60" },
//           2: { color: "#5A496A" },
//           3: { color: "#95BB4D" }
//         },
//         chartArea: {
//           // left: 60,
//           // top: 80,
//           width: "100%",
//           height: "100%"
//         },
//         legend: { position: "top" }
//       },
//       donutOptionsTwo: {
//         pieHole: 0.32,
//         title: "SERVICE USE BY GENDER",
//         titleTextStyle: { color: "grey" },
//         slices: { 0: { color: "#5A496A" }, 1: { color: "#EF5D60" } },
//         chartArea: {
//           // left: 60,
//           // top: 80,
//           width: "100%",
//           height: "100%"
//         },
//         legend: { position: "top" }
//       }
//     }
//   },
//   reducers: {}
// });

// // Selectors
// export const selectBarData = state => state.stats.data.barData;
// export const selectDonutDataOne = state => state.stats.data.donutDataOne;
// export const selectDonutDataTwo = state => state.stats.data.donutDataTwo;

// export const selectBarOptions = state => state.stats.options.barOptions;
// export const selectDonutOptionsOne = state =>
//   state.stats.options.donutOptionsOne;
// export const selectDonutOptionsTwo = state =>
//   state.stats.options.donutOptionsTwo;

// export default statsSlice.reducer;
