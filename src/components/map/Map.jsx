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
    this.map.on('load', function() {
      this.addTreeLayer(); 
    }.bind(this));
    
  }

  componentDidUpdate() {
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
    var visibility = layer.visible ? 'visible': 'none';

    this.map.addLayer({
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

    this.map.addLayer({
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

  addTreeLayer(){
    this.map.addSource('trees', {
      type: 'geojson',
      data: 'mapbox://ninath93.5kp4zadi'
    });

    this.map.addLayer({
      id: 'trees-heat',
      type: 'heatmap',
      source: 'trees',
      maxzoom: 15,
      paint: {
        // increase weight as diameter breast height increases
        'heatmap-weight': {
          property: 'dbh',
          type: 'exponential',
          stops: [
            [1, 0],
            [62, 1]
          ]
        },
        // increase intensity as zoom level increases
        'heatmap-intensity': {
          stops: [
            [11, 1],
            [15, 3]
          ]
        },
        // assign color values be applied to points depending on their density
        'heatmap-color': [
          'interpolate',
          ['linear'],
          ['heatmap-density'],
          0, 'rgba(236,222,239,0)',
          0.2, 'rgb(208,209,230)',
          0.4, 'rgb(166,189,219)',
          0.6, 'rgb(103,169,207)',
          0.8, 'rgb(28,144,153)'
        ],
        // increase radius as zoom increases
        'heatmap-radius': {
          stops: [
            [11, 15],
            [15, 20]
          ]
        },
        // decrease opacity to transition into the circle layer
        'heatmap-opacity': {
          default: 1,
          stops: [
            [14, 1],
            [15, 0]
          ]
        },
      }
    }, 'waterway-label');
    this.map.addLayer({
      id: 'trees-point',
      type: 'circle',
      source: 'trees',
      minzoom: 14,
      paint: {
        // increase the radius of the circle as the zoom level and dbh value increases
        'circle-radius': {
          property: 'dbh',
          type: 'exponential',
          stops: [
            [{ zoom: 15, value: 1 }, 5],
            [{ zoom: 15, value: 62 }, 10],
            [{ zoom: 22, value: 1 }, 20],
            [{ zoom: 22, value: 62 }, 50],
          ]
        },
        'circle-color': {
          property: 'dbh',
          type: 'exponential',
          stops: [
            [0, 'rgba(236,222,239,0)'],
            [10, 'rgb(236,222,239)'],
            [20, 'rgb(208,209,230)'],
            [30, 'rgb(166,189,219)'],
            [40, 'rgb(103,169,207)'],
            [50, 'rgb(28,144,153)'],
            [60, 'rgb(1,108,89)']
          ]
        },
        'circle-stroke-color': 'white',
        'circle-stroke-width': 1,
        'circle-opacity': {
          stops: [
            [14, 0],
            [15, 1]
          ]
        }
      }
    }, 'waterway-label');

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