import React, { useState, useEffect } from 'react';
import { Col, Button, Input } from 'reactstrap';
import '../../css/help.css';
import { union } from 'ramda';
import renderIf from 'render-if';

const TextSearch = () => {
  const { google } = window;
  const container = document.createElement('div');
  const service = new google.maps.places.PlacesService(container);
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isRequestDone, setIsRequestDone] = useState(false);
  
  const textRequest = {
    // Center on Wellington
    // Bias results towards New Zealand
    radius: 100000,
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

  const noResults = () => <div className="result">Sorry, no results found.</div> 

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
          setIsRequestDone(true);
        } 
        setIsRequestDone(true);
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
    <Col>
      <label htmlFor="location">Location</label>
      <Input
        type="text"
        name="location"
        onChange={handleChange}
      />
      <Button onClick={() => fetchResults()}>Search</Button>
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
  );
};

export default TextSearch;
