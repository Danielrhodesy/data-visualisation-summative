import React, { Component } from 'react';
import { render } from 'react-dom';

class Map extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    onScriptLoad() {
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
        this.props.onMapLoad(map)
    }

    componentDidMount() {
        if (!window.google) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.google.com/maps/api/js?key=AIzaSyBzX6ygy4-i3JI7lj73Zh-NeXl_wYlu-yA`;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onScriptLoad()
            })
        } else {
            this.onScriptLoad()
        }
    }

    render() {
        return (
            <div style={{ width: 500, height: 500 }} id={this.props.id} />
        );
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
    }
}

export default Map

