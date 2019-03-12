import styled from "styled-components";
import React, {Component} from 'react';
import Map from './Map2';
// import Navbar from '../ResponsiveDrawer';
import Navbar from '../RDrawer';
import Geocoder from "../Geocoder";
// import Gislyfe from './reducers/Gislyfe';
// import { Provider } from 'react-redux';


const MapWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  align-items: stretch;
`;

class MapWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      receivedJson: this.props.receivedJson,
      layers: [],
    };
  }
  //initialize store
// let store = createStore(Gislyfe)
// console.log(store.getState());
  updateMapLayers(layers){
    this.setState({ layers: layers });
  }

  render() {
    return (
      // <Provide store = { store }r>
      <div>
        <Navbar updateMapLayers={this.updateMapLayers.bind(this)}/>
        <MapWrapperDiv>
          <Map layers={this.state.layers}/>
        </MapWrapperDiv> 
        </div> 
      // </Provide>    
    );
  }
}


export default MapWrapper;