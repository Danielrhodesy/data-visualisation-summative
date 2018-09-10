import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import './index.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CarouselPage from './components/carousel/carousel'

WebFont.load({
    google: {
        families: ['Montserrat:400,600,700', 'sans-serif']
    }
})

ReactDOM.render(<App />, document.getElementById('home'));
// ReactDOM.render(<CarouselPage />, document.getElementById('carousel'));
registerServiceWorker();
