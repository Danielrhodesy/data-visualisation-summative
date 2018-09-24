import React from "react";

import "./map.css";

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            zoom: 13,
            maptype: "roadmap",
            place_formatted: "",
            place_id: "",
            place_location: "",
        };
    }

    componentDidMount() {
        let map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: -41.228241, lng: 174.905120 },
            zoom: 5,
            mapTypeId: "roadmap",
        });

        map.addListener("zoom_changed", () => {
            this.setState({
                zoom: map.getZoom(),
            });
        });

        map.addListener("maptypeid_changed", () => {
            this.setState({
                maptype: map.getMapTypeId(),
            });
        });

        let marker = new window.google.maps.Marker({
            map: map,
            position: { lat: -41.228241, lng: 174.905120 },
        });

        let inputNode = document.getElementById("pac-input");
        let autoComplete = new window.google.maps.places.Autocomplete(inputNode);


        autoComplete.addListener("place_changed", () => {
            let place = autoComplete.getPlace();
            let location = place.geometry.location;

            this.setState({
                place_formatted: place.formatted_address,
                place_id: place.place_id,
                place_location: location.toString(),
            });

            map.fitBounds(place.geometry.viewport);
            map.setCenter(location);

            marker.setPlace({
                placeId: place.place_id,
                location: location,
            });
        });
    }

    render() {
        return (
            <div className="map-container">
              <input className="pac-input" id="pac-input" type="text" placeholder="Enter a location"/>
              <div className="map" id="map"/>
            </div>
        );
    }
}

export default Map
