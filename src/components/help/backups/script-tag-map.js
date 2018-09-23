import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';

class Map extends Component {

    render() {
        return (
            <div className="map-container">
                <ScriptTag type="text/javascript" src="./map-script.js"/>
                <div id="map"></div>
                <input className="pac-input"/>
            </div>
        );
    }
}

export default Map
