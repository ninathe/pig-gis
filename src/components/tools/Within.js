
// import React from 'react'
import React, { Component } from 'react'

//Material ui
import ToolContent from './ToolsContent';
import * as turf from '@turf/turf'
import formatJson from '../utils';



class Within extends Component{
  constructor(props) {
    super(props);
  }


  submitWithin = submitInput =>{
    if (submitInput.layers.length != 2)
      alert("Velg to lag til utregning.")
    else{
      //Get geometries
      let geom1 = submitInput.layers[0] 
      let geom2 = submitInput.layers[1]

      let within = turf.pointsWithinPolygon(geom1, geom2);      //Within geojson
      if(within != null){
        let withinName = geom1.name+"_"+geom2.name + "Within"
        return (formatJson(within,withinName, true, 0.5))    //return formated Json within-geojson, name, noBorder, fill-opacity
      }
    }
    
   
  }

  render() {
    let layer1 = {value: "Layer1", type: ["Point"], helperText: "Select point-layer", id:"Layer1"}
    let layer2 = {value: "Layer2", type: ["Polygon", "MultiPolygon"], helperText: "Select layer", id:"Layer2"}
    
    return(
      <ToolContent 
      selectionFields={[layer1, layer2]}
      submitForm={this.submitWithin}
      close ={this.props.close}
      ></ToolContent>
    ); 
  }
}

export default Within;
