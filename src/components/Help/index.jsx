import React, { useState } from 'react';
import {
  Button, Form, InputGroup, Input, Label, FormGroup, Spinner,
} from 'reactstrap';
import { union } from 'ramda';
import renderIf from 'render-if';

const Search = () => {
  const { google } = window;
  const container = document.createElement('div');
  const service = new google.maps.places.PlacesService(container);
  const [location, setLocation] = useState('');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isRequestDone, setIsRequestDone] = useState(false);

  const textRequest = {
    // Center on Wellington
    // Bias results towards New Zealand
    radius: 1000000,
    location:
      {
        lat: -41.228241,
        lng: 174.905120,
      },
    query: `mental health in ${location}`,
  };

  const fields = [
    'name', 'formatted_address', 'formatted_phone_number', 'website',
  ];

  const placesArr = [];

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const details = places.map((place, i) => (
    <div key={[i]} className="result-container">
      <ul key={place.id} className="result-list">
        <li key={place.name} className="result">{place.name}</li>
        <li key={place.formatted_address} className="result">{place.formatted_address}</li>
        <li key={place.formatted_phone_number} className="result">{place.formatted_phone_number}</li>
        <li key={place.website} className="result"><a href={place.website}>{place.website}</a></li>
      </ul>
      <hr />
    </div>
  ));

  const fetchDetails = (r) => {
    // Clear previous results
    placesArr.length = 0;
    setPlaces(placesArr);
    // API request - ignore warning about returning value
    // eslint-disable-next-line
    r.map((result) => {
      service.getDetails({
        placeId: result.place_id,
        fields,
      }, ((place, status) => {
        if (status === 'OK' && place.formatted_address) {
          placesArr.push(place);
          // Avoid duplicate results
          const uniqPlaces = union(placesArr);
          // Ensure places state updates with all received places
          setTimeout(() => { setLoading(false); setPlaces(uniqPlaces); }, 1000);
        } else if (status === 'ZERO_RESULTS') {
          setLoading(false);
          setIsRequestDone(true);
        } else {
          // Avoid infinite load
          setTimeout(() => { setLoading(false); setIsRequestDone(true); }, 5000);
        }
      }));
    });
  };

  const fetchResults = () => {
    setLoading(true);
    service.textSearch(
      textRequest,
      ((response) => fetchDetails(response)),
    );
  };

  return (
    <section className="help">
      <div className="help__intro">
        <h2>Find help near you</h2>
        <Form className="help__form">
          <p>
            We know finding help is hard when you&apos;re in a tough spot.
            Use this search to find mental health support in your area.
            <br />
            <br />
            Please enter your location (your nearest suburb, town, or city).
          </p>
          <br />
          <br />
          <FormGroup>
            <InputGroup className="help__input-group">
              <Label className="help__input-label" for="location">Location</Label>
              <Input placeholder="Wellington" className="help__input" onChange={handleChange} value={location} />
            </InputGroup>
            <Button className="button help__button" onClick={() => fetchResults()}>
              SEARCH
              {renderIf(loading)(() => (
                <div>
                  <Spinner color="secondary" />
                </div>
              ))}
            </Button>
          </FormGroup>
        </Form>
      </div>
      {renderIf(!loading && isRequestDone)(() => (
        <div className="help__results">
          {details}
          {renderIf(places.length === 0 && isRequestDone && !loading)(() => (
            <div className="result">Sorry, no results found. Please try entering a different place.</div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Search;
