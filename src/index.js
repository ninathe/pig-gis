import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Map from './components/frontpage/Index';
import Map from './components/map/MapWrapper';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    
    <Map />, 

    document.getElementById('root')
);
registerServiceWorker();
