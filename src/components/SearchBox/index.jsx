import { dropLast } from "ramda";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePlacesAutocomplete from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import renderIf from "render-if";
import { fetchPlaces, selectIsSearchLoading } from "../../redux/searchSlice";
import { ReactComponent as LoadingIndicator } from "../../assets/loading.svg";

const SearchBox = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    debounce: 300,
    cache: 86400
  });

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsSearchLoading);

  // Prevent resubmitting within 2.5s
  const [isDisabled, setIsDisabled] = useState(false);
  const preventResubmit = () => {
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 2500);
    clearTimeout();
  };

  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();
  };

  const renderSuggestions = () => {
    const selectedData = dropLast(3, data);
    return selectedData.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <li
          className="w-72 lg:w-96 p-2 mb2 border bg-white hover:bg-lightBlue-300 z-10"
          key={place_id}
          onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  }

  return (
    <div className="flex flex-col flex-wrap lg:flex-row">
      <div ref={ref}>
        <label htmlFor="location" className="text-white">Please enter your location.</label>
        <input
          className="flex w-72 lg:w-96 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lightBlue-300 focus:border-transparent my-2 sm:my-0 sm:mt-2 pl-2 py-2 h-10 text-black"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Location..."
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <ul className="absolute">{renderSuggestions()}</ul>}
      </div>
      <button
        className="btn lg:mt-8 lg:ml-2"
        type="submit"
        disabled={isDisabled}
        onClick={e => {
          e.preventDefault();
          dispatch(fetchPlaces(value));
          preventResubmit();
        }}>
        {renderIf(!isLoading)(() => (
          "Search"
        ))}
        {renderIf(isLoading)(() => (
          <LoadingIndicator
            title="Loading indicator"
            stroke="white"
            fill="white"
            className="animate-spin"
          />
        ))}
      </button>
    </div>
  );
};

export default SearchBox;
