import React, { Component } from 'react';
import Map from './map.js';
import { Button } from 'reactstrap';
import './map.css';
// import GoogleMapsContainer from './components/map/react-map';
// import config from "config.js";

class Help extends Component {
    // createInfoWindow(e, map) {
    //     const infoWindow = new window.google.maps.InfoWindow({
    //         content: '<div id="infoWindow" />',
    //         position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    //     })
    //     infoWindow.addListener('domready', e => {
    //         render(<InfoWindow />, document.getElementById('infoWindow'))
    //     })
    //     infoWindow.open(map)
    // }
    render() {
        // var currentPage = this.state.
        return (
            // <Container>
            //     <Row>
            //         <Col>
                        <div className="help">
                                <div className="map-container">
                                    <Map/>
                                </div>
                            <Button className="second-button button" color="success" size="large" onClick={this.props.changePage.bind(this, 'homePage')}>HOME</Button>
                        </div>
            //         </Col>
            //     </Row>
            // </Container>
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

export default Help
