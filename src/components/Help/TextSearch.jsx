import React, { useState, useEffect, useCallback } from 'react';
import { Col, Button, Input } from 'reactstrap';
import '../../css/help.css';
import { uniq, pipe, map, union } from 'ramda';
import renderIf from 'render-if';

const TextSearch = () => {
  const { google } = window;
  const container = document.createElement('div');
  const service = new google.maps.places.PlacesService(container);
  const [location, setLocation] = useState(null);
  const [results, setResults] = useState([]);
  const [places, setPlaces] = useState([]);

  const textRequest = {
    radius: 100000,
    // Center on Wellington
    location:
      {
        lat: -41.228241,
        lng: 174.905120,
      },
    query: `mental health in ${location}`,
  };

  const fields = [
    'name', 'formatted_address', 'formatted_phone_number', 'photos', 'website',
  ];

  const placesArr = [];

  const details = places.map((place) => (
    <div className="result-container" key={place.id}>
      <li className="result">{place.name}</li>
      <li className="result">{place.formatted_address}</li>
      <li className="result">{place.formatted_phone_number}</li>
      <li className="result"><a href={place.website}>{place.website}</a></li>
    </div>
  ));


  const fetchDetails = (r) => {
    r.map((result) => {
      service.getDetails({
        placeId: result.place_id,
        fields,
      }, ((place, status) => {
        if (status === 'OK') {
          placesArr.push(place);
          console.log(placesArr, places);
          const uniqPlaces = union(placesArr);
          setPlaces(uniqPlaces);
        }
      }));
    });
  };

  const items = results.map((place) => (
    <div className="result-container" key={place.id}>
      <ul className="results-list">
        <li className="result">{place.name}</li>
        <li className="result">{place.formatted_address}</li>
        <li className="result">{place.formatted_phone_number}</li>
        <li className="result">{place.website}</li>
        <hr />
      </ul>
    </div>
  ));

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const fetchResults = () => {
    service.textSearch(
      textRequest,
      ((response) => fetchDetails(response)),
    );
  };

  // const fetch = pipe(fetchResults, fetchDetails);

  useEffect(() => setResults(results), [results]);
  useEffect(() => setPlaces(places), [places]);
  return (
    <Col>
      <label htmlFor="location">Location</label>
      <Input
        type="text"
        name="location"
        onChange={handleChange}
      />
      <Button onClick={() => fetchResults()}>Search</Button>
      <section>
        {items}
      </section>
      <section>
        {details}
      </section>
    </Col>
  );
};

export default TextSearch;
