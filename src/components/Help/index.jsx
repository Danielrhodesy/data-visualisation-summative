import React from "react";
import renderIf from "render-if";
import { useSelector } from "react-redux";
import {
  selectIsSearchLoading,
  selectIsSearchError,
  selectPlaceDetails,
  selectIsRequestDone
} from "../../redux/searchSlice";
import SearchBox from "../SearchBox";

const Help = () => {
  const isLoading = useSelector(selectIsSearchLoading);
  const isError = useSelector(selectIsSearchError);
  const isDone = useSelector(selectIsRequestDone);
  const places = useSelector(selectPlaceDetails);

  // Render results
  const details = places.map((place, i) => (
    <div
      key={`result-${[i]}`}
      className="w-full md:w-6/12 bg-white border-2 border-gray-300 py-5 sm:p-5 rounded-md tracking-wide shadow-lg mb-6">
      <div className="flex">
        <div className="flex flex-col mx-5 w-full md:w-10/12">
          <h4 className="prose prose-l font-semibold mb-2">{place.name}</h4>
          <p className="text-gray-800 mt-2">{place.formatted_address}</p>
          <p className="text-gray-800 mt-2">{place.formatted_phone_number}</p>
          <p className="text-purple-600 mt-2">
            <a href={place.website}>{place.website}</a>
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="flex flex-col items-center justify-center w-screen">
      <div className="flex flex-col items-start justify-start mt-5 w-10/12 md:w-6/12">
        <h1 className="prose prose-2xl font-semibold">Find help near you</h1>
        <p className="prose">
          We know finding help is hard when you're in a tough spot.
          Use this search to find mental health support in your area.
        </p>
        <div className="flex flex-col sm:flex-row justify-start self-start w-full mt-5">
          <SearchBox />
        </div>
      </div>
      {renderIf(!isLoading && isDone)(() => (
        <section className="flex flex-col items-center justify-center w-screen mt-5">
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="prose prose-xl font-semibold mb-5">Results</h3>
            {details}
            {renderIf(isError)(() => (
              <div className="">
                Sorry, something has gone wrong. Please try again.
              </div>
            ))}
            {renderIf(isDone && places.length === 0)(() => (
              <div className="">
                No results found. Please try a different location.
              </div>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
};

export default Help;
