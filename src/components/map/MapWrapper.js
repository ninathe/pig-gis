import styled from "styled-components";
import React, {Component} from 'react';
import Map from './Map';
// import Navbar from '../ResponsiveDrawer';
import Navbar from '../RDrawer';
import Geocoder from "../Geocoder";

class MapWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      receivedJson: this.props.receivedJson,
      layers: [],
    };
  }
  
  updateMapLayers(layers){
    this.setState({ layers: layers });
  }

  render() {
    // console.log(this.state.layers);
    return (
      <div>
        <Navbar updateMapLayers={this.updateMapLayers.bind(this)}/>
        <Map layers={this.state.layers}/>
    </div>
    );
  }
}


export default MapWrapper;