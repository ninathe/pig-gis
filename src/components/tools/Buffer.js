
// import React from 'react'
import React, { Component } from 'react'

//Material ui
import formatJson from '../utils';
import ToolContent from './ToolsContent';
import * as turf from '@turf/turf'

class Buffer extends Component{
  constructor(props) {
    super(props);
  }

  // Changehandler - submit buffer
  submitBuffer = submitInput => {
    if(submitInput.layers[0] != undefined && submitInput.textVal != null){
      let geom = submitInput.layers[0]; //In buffer -- Only one layer

      let buffer = turf.buffer(geom, submitInput.textVal, {units: 'meters'});      //Buffer geojson
      let bufferName = geom.name + "_Buffer"
      return formatJson(buffer,bufferName, true, 0.5)      //formatJson buffer-geojson, name, noBorder, fill-opacity  
    } else{
      alert("Velg layer og bufferverdi")
    }  
  }

  render() {
    let textField = {value: "Buffer", helperText: "Value in meter" }
    let layer = {value: "Layer", helperText: "Select layer", id:"Layer1"}
    return(
      <ToolContent 
      selectionFields={[layer]}
      textField={textField}
      submitForm={this.submitBuffer}
      close ={this.props.close}
      ></ToolContent>
    ); 
  }
}

export default Buffer;
