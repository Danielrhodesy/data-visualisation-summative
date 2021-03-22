// import { takeLatest, call, put } from "redux-saga/effects";
// import { service } from "../utils/utils";

// export default function* rootSaga() {
//   yield takeLatest("search/fetchPlaces", fetchPlaceSaga())
// }

// function* fetchPlaceSaga() {
//   yield put({ type: "search/clearData" })
//   yield put({ type: "search/fetchPlacesRequest"})
//   try {
//     const res = yield call(
//       async (location) =>
//       await service.textSearch(
//         {
//           // Bias results towards NZ
//           radius: 1000000,
//           // Set initial location to Wellington
//           location:
//             {
//               lat: -41.228241,
//               lng: 174.905120,
//             },
//           query: `mental health in ${location}`
//         }, response => response
//       //   response => response.map((result) => 
//       //   service.getDetails({
//       //     placeId: result.place_id,
//       //     fields:
//       //       [
//       //         'name', 'formatted_address', 'formatted_phone_number', 'website'
//       //       ]
//       //   })
//       // )
//       )
//     )
//     yield put({ type: "search/fetchPlacesSuccees", payload: res })
//   } catch (error) {
//     console.log(error)
//     yield put({ type: "search/fetchPlacesFailure" })
//   }
// }