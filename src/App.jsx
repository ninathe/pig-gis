import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    layers: [],
    layersChange: false, //needed to recognise change in layers
  };

  addLayer(){

  }

  receivedJson(jsonFile){
    alert("JSON received");
  }


  render() {
    return (
      <div className="App">
        <div id = "map-container">
        </div>
      </div>
    );
  }
}

export default App;
