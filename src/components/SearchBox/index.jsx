import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import renderIf from "render-if";
import { fetchPlaces, selectIsSearchLoading } from "../../redux/searchSlice";
import { ReactComponent as LoadingIndicator } from "../../assets/loading.svg";

const SearchBox = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsSearchLoading)

  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col flex-wrap lg:flex-row" >
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(fetchPlaces({ place: value }));
        }}
      >
        <label htmlFor="location" className="text-white">Please enter your location.</label>
        <input
          className="flex w-72 lg:w-96 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent my-2 sm:my-0 sm:mt-2 pl-2 py-2 h-10 text-black"
          data-testid="SearchBox-input"
          value={value}
          onChange={handleInput}
          placeholder="Location..."
          type="text"
        />
        <button
          data-testid="SearchBox-button"
          className="btn lg:mt-8 lg:ml-2"
          type="submit"
        >
          {renderIf(!isLoading)(() => (
            "Search"
          ))}
          {renderIf(isLoading)(() => (
            <LoadingIndicator
              data-testid="SearchBox-loader"
              title="Loading indicator"
              stroke="white"
              fill="white"
              className="animate-spin"
            />
          ))}
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
