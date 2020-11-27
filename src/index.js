import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Popper from 'popper.js';
import { Provider, provider } from 'react-redux';
import store from './App/Store';
import Link from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js ';


ReactDOM.render( 

    document.getElementById('root')
);

serviceWorker.register();
