import React, {
  useState, useEffect, useLayoutEffect, useRef,
} from 'react';
import {
  Col, Container, Button, Form, InputGroup, Input, Label, FormGroup,
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
    r.map((result) => {
      service.getDetails({
        placeId: result.place_id,
        fields,
      }, ((place, status) => {
        if (status === 'OK') {
          setLoading(false);
          placesArr.push(place);
          const uniqPlaces = union(placesArr);
          setPlaces(uniqPlaces);
          // Prevent no results message showing preemptively
          setTimeout(() => setIsRequestDone(true), 250);
        } else if (status === 'ZERO_RESULTS') {
          setLoading(false);
          setIsRequestDone(true);
        } else {
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


  useEffect(() => setPlaces(places), [places]);

  return (
    // <Container className="help">
    //   <Col>
    <section className="help">
      <div className="help__intro">
        <h2>Find help near you</h2>
        <p>
          We know finding help is hard when you&apos;re in a tough spot.
          <br />
          Use this search to find mental health support in your area.
          <br />
          <br />
          Please enter your location (your nearest town or city will do).
        </p>
        <br />
        <br />
        <Form>
          <FormGroup>
            <InputGroup className="help__input-group">
              <Label for="location">Location</Label>
              <Input placeholder="Wellington" className="help__input" onChange={handleChange} value={location} />
              <Button className="button" onClick={() => fetchResults()}>SEARCH</Button>
            </InputGroup>
          </FormGroup>
        </Form>
        </div>
      {renderIf(loading)(() => (
        <div className="loader" />
      ))}
      <div className="help__results">
        {details}
        {renderIf(places.length === 0 && isRequestDone === true)(() => (
          <div className="result">Sorry, no results found. Please try entering a different place.</div>
        ))}
      </div>
    </section>
  );
};

export default Search;
