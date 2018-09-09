import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Carousel } from 'react-responsive-carousel';
import CarouselPage from './carousel/carousel'

WebFont.load({
    google: {
        families: ['Montserrat:400,700,900', 'sans-serif']
    }
})

// ReactDOM.render(<CarouselPage />, document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render(<CarouselPage />, document.getElementById('root'));
registerServiceWorker();
