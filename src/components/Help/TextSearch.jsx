import React, { useState } from 'react';

const TextSearch = (props) => {
  const { google } = window;
  const container = document.createElement('div');
  const service = new google.maps.places.PlacesService(container);
  const [location, setLocation] = useState('wellington');

  const request = {
    radius: 100000,
    location: 
      {
        lat: -41.228241,
        lng: 174.905120,
      },
    query: `mental health in ${location}`,
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const fetchResults = () => {
    service.textSearch(request, ((results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
      }
    }));
  };

  return (
    <>
      <label htmlFor="location">location</label>
      <input
        type="text"
        name="location"
        onChange={handleChange}
      />
      <button type="button" onClick={() => fetchResults()}>Search</button>
      <h3>{location}</h3>
      <div className="places-container" />
    </>
  );
}

export default TextSearch;
