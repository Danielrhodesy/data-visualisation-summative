import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import './css/reset.css';
import './css/index.css';
import App from './App';

WebFont.load({
  google: {
    families: ['Montserrat:400,600,700', 'sans-serif'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
