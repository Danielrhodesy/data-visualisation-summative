import React, { Component } from 'react';
// import config from "config.js"; 

function MapImage(){
    
    // const url = "https://maps.googleapis.com/maps/api/staticmap?center=Wellington,New+ZealandY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key="

   
    return <img className="map-image" src="https://maps.googleapis.com/maps/api/staticmap?center=Wellington,New+ZealandY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyBhrNAnxQp6Jknk4roq8oG4_ygmKPPkLbE"/>;
    ;
}

export default MapImage;