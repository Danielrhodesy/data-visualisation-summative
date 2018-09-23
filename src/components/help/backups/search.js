import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import SearchBox from 'react-google-maps/lib/places/SearchBox';
const { google } = window.google;

export default class SearchBox extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string,
        onPlacesChanged: PropTypes.func
    }
    render() {
        return <input ref="input" {...this.props.placeholder} type="text" />;
    }
    onPlacesChanged = () => {
        if (this.props.onPlacesChanged) {
            this.props.onPlacesChanged(this.searchBox.getPlaces());
        }
    }
    componentDidMount() {
        var input = ReactDOM.findDOMNode(this.refs.input);
        this.searchBox = new google.maps.places.SearchBox(input);
        this.searchBox.addListener('places_changed', this.onPlacesChanged);
    }
    componentWillUnmount() {
        google.maps.event.removeListener('places_changed', this.searchBoxListener);
    }
}