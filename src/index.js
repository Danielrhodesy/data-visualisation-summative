import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


WebFont.load({
    google: {
        families: ['Montserrat:400,700,900', 'sans-serif']
    }
})


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
