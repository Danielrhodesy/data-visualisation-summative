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
import Nav from "../Nav";
import { selectPage } from "../../redux/navSlice";

const Help = () => {
  const isLoading = useSelector(selectIsSearchLoading);
  const isError = useSelector(selectIsSearchError);
  const isDone = useSelector(selectIsRequestDone);
  const places = useSelector(selectPlaceDetails);
  const page = useSelector(selectPage);


  // Render results
  const details = places.map((place, i) => (
    <div
      key={`result-${[i]}`}
      className="w-full md:w-6/12 bg-white border-2 border-gray-300 py-5 sm:p-5 rounded-md tracking-wide shadow-lg mb-6">
      <div className="flex">
        <div className="flex flex-col mx-5 w-full md:w-10/12">
          <h4 className="prose prose-l font-semibold mb-2">{place.name}</h4>
          <p className="mt-2">{place.formatted_address}</p>
          <p className="text-lightBlue-700 hover:text-lightBlue-500 underline mt-2">
            <a href={`tel:${place.formatted_phone_number}`}>
              {place.formatted_phone_number}
            </a>
          </p>
          <p className="text-lightBlue-700 hover:text-lightBlue-500 underline mt-2 break-words">
            <a href={place.website}>{place.website}</a>
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {renderIf(page === "help")(() => (
        <>
          <Nav />
          <section
            data-testid="Help-header"
            className="flex flex-col items-center justify-center w-screen bg-help bg-bottom bg-cover pb-16 h-96"
          >
            <div className="flex flex-col flex-nowrap items-start justify-start mt-16 p-10 w-10/12 md:w-6/12 rounded-md bg-translucent">
              <h1 className="prose prose-2xl font-semibold text-white">
                Find help near you
            </h1>
              <p className="prose text-white">
                We know finding help is hard when you're in a tough spot. Use this
                search to find mental health support in your area.
             </p>
              <br />
              <SearchBox />
            </div>
          </section>
          <section data-testid="Help-results"
            className="flex flex-col items-center justify-center w-screen">
            {renderIf(!isLoading && isDone)(() =>
              (
                <div className="flex flex-col items-center justify-center w-full">
                  <h3 className="prose prose-xl font-semibold mt-10 mb-5">
                    Results
                </h3>
                  {details}
                  {renderIf(isError)(() => (
                    <div>Sorry, something has gone wrong. Please try again.</div>
                  ))}
                  {renderIf(isDone && places.length === 0)(() => (
                    <div>No results found. Please try a different location.</div>
                  ))}
                </div>
              )
            )}
          </section>
        </>
      ))}
    </>
  );
};

export default Help;
