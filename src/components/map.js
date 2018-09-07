import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleApiComponent, GoogleApiWrapper } from 'google-maps-react';


export class Container extends React.Component {
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div style={style}>
                <Map google={this.props.google}/>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBzX6ygy4-i3JI7lj73Zh-NeXl_wYlu-yA")
})(Container)


export class Map extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }

    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const { google } = this.props;
            const maps = google.maps;

            //Find map in DOM
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            //Google Maps API settings
            let zoom = 14;
            let lat = 37.774929;
            let lng = -122.419416;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
    }
    // render(){
    //     return (
    //         <div ref='map'>
    //             Loading map...
    //         </div>
    //     )
    }
}