import React, {Component} from 'react';
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


const MapDiv = styled.div`
  width: '100%';
  height: '100vh';
`;

class Map extends React.Component {
  constructor(props){
    super(props);
    console.log("UPDATEIN")
    console.log(this.props);
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9'
    });
  }

  componentDidUpdate() {
    //update layers
  }

  componentWillUnmount() {
    // this.map.remove();
  }

  removeMapLayers(layerIds) {
    for (let i in layerIds) {
      let layerId = layerIds[i];
      if(this._map.getSource(layerId)){
        this._map.removeLayer(layerId);
        this._map.removeSource(layerId);
      }
    }
  }


  addPointLayer(layer, i) {
    const {layers} = this.props;
    var layerAbove = i === 0 ? null : layers[i-1].id; //Assures that layer gets rendered in correct order
    let map = this._map;
    var visibility = layer.visible ? 'visible': 'none';

    map.addLayer({
      'id': layer.id,
      'type': 'circle',
      'source': {
        'type': 'geojson',
        'data': layer.data
      },
      'layout': {'visibility': visibility },
      'paint': {
        'circle-radius': layer.data.radius,
        'circle-color': layer.data.color,
        'circle-opacity': layer.data.opacity
      }
    }, layerAbove);
  }

  addLineLayer(layer, i) {
    const {layers} = this.props;
    var layerAbove = i === 0 ? null : layers[i-1].id; //Assures that layer gets rendered in correct order

    let map = this._map;
    var visibility = layer.visible ? 'visible': 'none';

    map.addLayer({
      'id': layer.id,
      'type': 'line',
      'source': {
        'type': 'geojson',
        'data': layer.data
      },
      'layout': {'visibility': visibility },
      'paint': {
        'line-color': layer.data.color,
        'line-opacity': layer.data.opacity,
        'line-width': 6
      }
    }, layerAbove);

  }

  addPolygonLayer(layer, i) {
    const {layers} = this.props;
    var layerAbove = i === 0 ? null : layers[i-1].id; //Assures that layer gets rendered in correct order
    let map = this._map;
    var visibility = layer.visible ? 'visible': 'none';

    map.addLayer({
      'id': layer.id,
      'type': 'fill',
      'source': {
        'type': 'geojson',
        'data': layer.data
      },
      'layout': {'visibility': visibility },
      'paint': {
        'fill-color': layer.data.color,
        'fill-opacity': layer.data.opacity
      }
    },layerAbove);

    let strokeOpacity = layer.data.strokeOpacity ? layer.data.strokeOpacity : 1;
    strokeOpacity = strokeOpacity > 1? strokeOpacity : 1;
    let strokeColor = layer.data.strokeColor ? layer.data.strokeColor: layer.data.color;

    map.addLayer({
      'id': layer.id + '_outline',
      'type': 'line',
      'source': {
        'type': 'geojson',
        'data': layer.data
      },
      'layout': {'visibility': visibility },
      'paint': {
        'line-color': strokeColor,
        'line-opacity': strokeOpacity ,
        'line-width': 3
      }
    }, layerAbove);

  }


  render() {
    const style ={
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };
    return <div style ={style} ref={el => this.mapContainer = el } />;
  }
}

export default Map;