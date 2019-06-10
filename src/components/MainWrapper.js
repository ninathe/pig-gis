import styled from "styled-components";
import React, {Component} from 'react';
import MapContainer from './map/Map'
import Sidebar from './sidebar/Sidebar';
import Tools from './tools/ToolsPopup';


//Inline CSS
const MapWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  align-items: stretch;
`;

class MainWrapper extends Component{
  
  render() {
    return (
      <div>
        <Sidebar />
        <MapWrapperDiv>
          <MapContainer />
        </MapWrapperDiv> 
        <Tools />
      </div> 
    );
  }
}


export default MainWrapper;