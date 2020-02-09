import React, { useState, useEffect } from 'react';
import { addIndex, map } from 'ramda';

const TextSearch = (props) => {
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

  const mapIndexed = addIndex(map);
  const mapResults = (res) => {
    if (res !== []) {
      mapIndexed((i) => (
        <div style={{ height: '100px', width: '100px' }}>
          <div key={[i]}>{res[i].name}</div>
          <div key={[i]}>{res[i].formatted_address}</div>
          <div key={[i]}>{res[i].opening_hours}</div>
          <div key={[i]}>{res[i].formatted_phone_number}</div>
          <div key={[i]}>{res[i].rating}</div>
        </div>
      ));
    }
  };


  // for (let i = 0; i < textResponse.length; i++) {
  // service.getDetails({ placeId: textResponse[i].place_id }, ((detailResponse, stat) => {
  // console.log(detailResponse);
  //
  // return detailArr;
  // }));

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
      {mapResults(results)}
    </>
  );
};

export default TextSearch;
