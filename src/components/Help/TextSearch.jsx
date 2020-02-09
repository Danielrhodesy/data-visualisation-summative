import React, { useState } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { API_KEY } from '../../apiKey.mjs';

// class TextSearch extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { location: '' };
//   }

//   componentDidMount() {
//     const map = new window.google.maps.Map(document.getElementById('map'), {
//       center: {lat: -33.8688, lng: 151.2195},
//       zoom: 13,
//       mapTypeId: 'roadmap',
//     });
//     const service = new google.maps.places.PlacesService(map);
//   }

//   fetchResults() {
//     const query = request.query + this.state.location;
//     request.query = query;
//     this.service.textSearch(request, function(results, status) {
//       console.log(results);
//     })
//   }

//   handleChange = event => {
//     this.setState({ location: event.target.value });
//     console.log(this.state.location);
//   };

//   render() {
//     return (
//       <>
//           <label htmlFor="location">location</label>
//           <input
//             type="text"
//             name="location"
//             value={this.state.location}
//             onChange={this.handleChange}
//           />
//           <button onClick={() => this.fetchResults()}>Search</button>
//         <h3>{this.state.location}</h3>
//         <div id="map" style={{width: 500 + 'px', height: 500 + 'px'}}></div>
//       </>
//     );
//   }
//  }

//  export default TextSearch;

const TextSearch = (props) => {
  const { google } = window;
  const map = <GoogleMap />;
  const service = new google.maps.places.PlacesService(map);
  const [location, setLocation] = useState('wellington');

  const request = {
    radius: 100000,
    lat: -41.228241,
    lng: 174.905120,
    query: `mental health in ${location}`,
  };

  const handleChange = (event) => {
    console.log(map);
    
    setLocation(event.target.value);
  };

  const fetchResults = () => {
    const query = request.query + location;
    request.query = query;
    service.textSearch(request, ((results, status) => {
      console.log(results);
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
      <div className="map" style={{ width: `${500}px`, height: `${500}px` }} />
    </>
  );
};

export default TextSearch;
