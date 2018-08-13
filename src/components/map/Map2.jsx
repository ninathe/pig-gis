// import {Component} from 'react';
import React, { Component}  from 'react';
// import ReactMapGL from 'react-map-gl';
// import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibmluYXRoOTMiLCJhIjoiY2piOWVmNmE5MGJmMTJwbW8zOHJuZTBmZiJ9.69E-4-Z2x8SiDViBka_tKA'; // Set your mapbox token here

// const Map = MapboxAccessToken({
//   accessToken: 'pk.eyJ1IjoibmluYXRoOTMiLCJhIjoiY2piOWVmNmE5MGJmMTJwbW8zOHJuZTBmZiJ9.69E-4-Z2x8SiDViBka_tKA'
// });

export default class Map extends Component {

  state = {
    mapStyle: 'mapbox://styles/mapbox/light-v9',
    viewport: {
      latitude: 59.911491,
      longitude: 10.757933,
      zoom: 10,
      bearing: 0,
      pitch: 0,
      width: 500,
      height: 500
    }
  }
  _onViewportChange = viewport => this.setState({viewport});
  
  _onStyleChange = mapStyle => this.setState({mapStyle});
  
  

  render() {
    const {viewport, mapStyle} = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle={mapStyle}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN} >
    </MapGL>
    );
  }
}