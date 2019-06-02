import styled from "styled-components";
import React, {Component} from 'react';
import MapContainer from './map/Map'
import Sidebar from './sidebar/Sidebar';
import Tools from './tools/ToolsPopup';


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

  updateMapLayers(layers){
    this.setState({ layers: layers });
  }

  render() {
    return (
      <div>
        <Sidebar updateMapLayers={this.updateMapLayers.bind(this)}/>
        <MapWrapperDiv>
          <MapContainer />
        </MapWrapperDiv> 
        <Tools />
      </div> 
    );
  }
}


export default MapWrapper;