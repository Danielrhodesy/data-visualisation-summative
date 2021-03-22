import React, { useMemo, useState } from "react";
import {
  Button, Form, InputGroup, Input, Label, FormGroup, Spinner
} from "reactstrap";
import renderIf from "render-if";
import { fetchPlaces } from "../../redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSearchLoading, selectIsSearchError, selectPlaceDetails, selectIsRequestDone } from "../../redux/searchSlice";
import SearchBox from "../SearchBox";

const Help = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsSearchLoading);
  const isError = useSelector(selectIsSearchError);
  const isDone = useSelector(selectIsRequestDone);
  const places = useSelector(selectPlaceDetails);

  const [location, setLocation] = useState("");

  // Input event handler
  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  // Render results
  const details = useMemo(() => places.map((place, i) => (
    <div key={`result-${[i]}`}>
      <ul key={place.id} className="result-list">
        <li key={place.name} className="result">{place.name}</li>
        <li key={place.formatted_address} className="result">{place.formatted_address}</li>
        <li key={place.formatted_phone_number} className="result">{place.formatted_phone_number}</li>
        <li key={place.website} className="result"><a href={place.website}>{place.website}</a></li>
      </ul>
      <hr />
    </div>
  )), [places]);

  return (
    <section className="help">
      <div className="help__intro">
        <h2>Find help near you</h2>
        <Form className="help__form">
          <p>
            We know finding help is hard when you're in a tough spot.
            Use this search to find mental health support in your area.
            <br />
            <br />
            Please enter your location (your nearest suburb, town, or city).
          </p>
          <br />
          <br />
          <FormGroup>
            <SearchBox />
          </FormGroup>
        </Form>
      </div>
      <section className="help__results">
        <div className="help__results-container">
          {renderIf(!isLoading)(() => (
            <>
              <h3 className="help__results-heading">Results</h3>
              {details}
              {renderIf(isError)(() => (
                <div className="result">Sorry, something has gone wrong. Please try again.</div>
              ))}
              {renderIf(isDone && places.length === 0)(() => (
                <div className="result">No results found. Please try a different location.</div>
              ))}
            </>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Help;