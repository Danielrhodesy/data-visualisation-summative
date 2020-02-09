import React, { useState, useEffect } from 'react';
import { addIndex, map, mapObjIndexed } from 'ramda';

const TextSearch = () => {
  const { google } = window;
  const container = document.createElement('div');
  const service = new google.maps.places.PlacesService(container);
  const [location, setLocation] = useState(null);
  const [results, setResults] = useState([]);

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
  

  const items = results.map((result, key) => (
    <div key={result.id}>
      <ul>
        <li>{result.name}</li>
        <li>{result.formatted_address}</li>
      </ul>
    </div>
  ));


  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const fetchResults = () => {
    service.textSearch(
      textRequest,
      ((textResponse, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setResults(textResponse);
        }
      }),
    );
  };

  useEffect(() => {
    setResults(results);
    console.log(results);
  }, [results]);

  // const updateResults = useEffect(() => console.log(mapResults(results)), [mapResults, results]);

  return (
    <>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        onChange={handleChange}
      />
      <button type="button" onClick={() => fetchResults()}>Search</button>
      <h3>{location}</h3>
      <ul>
        {items}
      </ul>
    </>
  );
};

export default TextSearch;
