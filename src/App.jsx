import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map/Map'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id = "map-container">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
