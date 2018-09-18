import React, { Component } from 'react';
import Map from './map';
import { Button } from 'reactstrap';
import './map.css';
// import GoogleMapsContainer from './components/map/react-map';
// import config from "config.js"; 

class Help extends Component {
    render() {
        // var currentPage = this.state.
        return (
            <div className="help">
            <input id="pac-input" className="controls" type="text" placeholder="Search Box"/>
            <div className="map">
                    <Map
                        id="myMap"
                        options={{
                            center: { lat: 41.0082, lng: 28.9784 },
                            zoom: 8
                        }}
                        onMapLoad={map => {
                            var marker = new window.google.maps.Marker({
                                position: { lat: 41.0082, lng: 28.9784 },
                                map: map,
                                title: 'Hello Istanbul!'
                            });
                        }}
                    />
            </div>
            <Button className="second-button button" color="success" size="large" onClick={this.props.changePage.bind(this, 'homePage')}>HOME</Button>
            </div>
        );
    }

    
    // componentDidMount() {
    //     const mapScript = document.createElement("map-script");
    //     mapScript.src = "./components/map/map-script.js";
    //     // mapScript.async = true;
    //     document.body.appendChild(mapScript);
    // }
    changePage(page) {
        this.setState({
            currentPage: page
        });
    }
}

export default Help;