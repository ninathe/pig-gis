import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Map from './components/map/MapWrapper';
import { Provider } from 'react-redux'
import configureStore from './store';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <Provider store={configureStore()}>
        <Map />
        <div>HALLO</div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
