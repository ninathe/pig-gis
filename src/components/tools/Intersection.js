
// import React from 'react'
import React, { Component } from 'react'

//Material ui
import ToolContent from './ToolsContent';
import * as turf from '@turf/turf'
import doDoubleFeatureAction from './doDoubleFeatureAction';


class Intersection extends Component{
  constructor(props) {
    super(props);
  }

  submitIntersection = submitInput =>{
    if (submitInput.layers.length != 2)
      alert("Velg to lag til utregning.")
    else if(submitInput.layers[0] == submitInput.layers[1])
      alert("Vennligst velg 2 forskjellige lag.")
    
    //Get geojson from state 
    let geom1 = submitInput.layers[0]  
    let geom2 = submitInput.layers[1]
    let intersection = doDoubleFeatureAction(geom1, geom2, turf.intersect, "intersection")
    
    if(intersection.features.length == 1 && intersection.features[0] == null)
      alert("Det er ingen overlapp mellom valgte lag.")
    else{
      return intersection   //Returning formated json
    }
  }

  render() {
    let layer1 = {value: "Layer1", helperText: "Select layer", id:"Layer1"}
    let layer2 = {value: "Layer2", helperText: "Select layer", id:"Layer2"}
    
    return(
      <ToolContent 
      selectionFields={[layer1, layer2]}
      submitForm={this.submitIntersection}
      close ={this.props.close}
      ></ToolContent>
    ); 
  }
}

export default Intersection;
