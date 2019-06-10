
// import React from 'react'
import React, { Component } from 'react'

//Material ui
import ToolContent from './ToolsContent';
import * as turf from '@turf/turf'
import doDoubleFeatureAction from './doDoubleFeatureAction';
import formatJson from '../utils';



class Difference extends Component{
  constructor(props) {
    super(props);
  }

  submitDifference = submitInput =>{
    if (submitInput.layers.length != 2)
      alert("Velg to lag til utregning.")
    else if(submitInput.layers[0] == submitInput.layers[1])
      alert("Vennligst velg 2 forskjellige lag.")
    else{
      //Get geometries
      let geom1 = submitInput.layers[0] 
      let geom2 = submitInput.layers[1]

      let difference = turf.difference(geom1.features[0], geom2.features[0]);      //Difference geojson
      if(difference != null){
        let differenceName = geom1.name+"_"+geom2.name + "_Difference"
        return (formatJson(difference,differenceName, true, 0.5))    //return formated Json difference-geojson, name, noBorder, fill-opacity
      }
    }
    
   
  }

  render() {
    let layer1 = {value: "Layer1", helperText: "Select layer", id:"Layer1"}
    let layer2 = {value: "Layer2", helperText: "Select layer", id:"Layer2"}
    
    return(
      <ToolContent 
      selectionFields={[layer1, layer2]}
      submitForm={this.submitDifference}
      close ={this.props.close}
      ></ToolContent>
    ); 
  }
}

export default Difference;
