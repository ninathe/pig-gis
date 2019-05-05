import styled from "styled-components";
import React, {Component} from 'react';
import MapContainer from './map/Map'
import Navbar from './RDrawer';
import Tools from './ToolsPopup';
import  buffer from '@turf/buffer';


const ToolsWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  align-items: stretch;
`;

class ToolsWrapper extends Component{
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

  doIntersection(poly1, poly2){
    var intersection = turf.intersect(poly1, poly2);
  }
  doWithin(points, searchWithin){
    var ptsWithin = turf.pointsWithinPolygon(points, searchWithin);
  }
  addBuffer(geojson, units, options){
    var buffered = turf.buffer(geojson, units, options);
  }
  doDifference(polygon1, polygon2){
    var difference = turf.difference(polygon1, polygon2);
  }
  render() {
    return (
      // <Provide store = { store }r>
      <div>
        <Navbar updateMapLayers={this.updateMapLayers.bind(this)}/>
        <ToolsWrapperDiv>
          <MapContainer />
        </ToolsWrapperDiv> 
        <Tools></Tools>
      </div> 
      // </Provide>    
    );
  }
}


export default ToolsWrapper;