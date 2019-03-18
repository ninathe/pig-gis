import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainWrapper from './components/map/MapWrapper';
import { Provider } from 'react-redux'
import configureStore from './store';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <Provider store={configureStore()}>
        <MainWrapper />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
