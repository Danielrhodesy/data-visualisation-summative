import React, { useState, useEffect } from 'react';
import {
  Col, Container, Button, InputGroup, Input, InputGroupAddon,
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

  const details = places.map((place) => (
    <div className="result-container" key={place.id}>
      <ul className="result-list">
        <li className="result">{place.name}</li>
        <li className="result">{place.formatted_address}</li>
        <li className="result">{place.formatted_phone_number}</li>
        <li className="result"><a href={place.website}>{place.website}</a></li>
      </ul>
      <hr />
    </div>
  ));

  const fetchDetails = (r) => {
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
    <Container className="help">
      <Col>
      <section className="help__intro">
        <h2>FIND HELP NEAR YOU</h2>
        <p>We know finding help is hard when you&apos;re in a tough spot. Enter your location to see what's available in your area.</p>
      </section>
        <InputGroup className="help__input-group">
          <label>Please enter your location. (Your nearest town or city will do).</label>
          <Input className="help__input" onChange={handleChange} value={location} />
          <Button className="button" onClick={() => fetchResults()}>SEARCH</Button>
        </InputGroup>
        {renderIf(loading)(() => (
          <div className="loader" />
        ))}
        <section className="results">
          {details}
          {renderIf(places.length === 0 && isRequestDone === true)(() => (
            <div className="result">Sorry, no results found. Please try entering a different place.</div>
          ))}
        </section>
      </Col>
    </Container>
  );
};

export default Search;
