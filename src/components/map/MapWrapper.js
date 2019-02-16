import styled from "styled-components";
import React, {Component} from 'react';
import Map from './Map3';
// import Navbar from '../ResponsiveDrawer';
import Navbar from '../RDrawer';
import Geocoder from "../Geocoder";



// const MapWrapper = props => (
class MapWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      receivedJson: this.props.receivedJson,
      files: [],
    };
  }
  
// );

  render() {
    return (
      <div>
        <Navbar receivedJson={this.props.receivedJson}/>
        <Map/>
        {/* <Geocoder/> */}
    </div>
    );
  }
}


export default MapWrapper;