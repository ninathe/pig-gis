import React, {Component} from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
import { connect } from 'react-redux'
import { addLayer, removeLayer } from '../actions'
import { readFile } from 'fs';
import '../App.css'



const Filedrop = ({dispatch}) => {
  let layers = 0;

  function setupReader(file) {
    readFile(file, function (json) {
      dispatch(addLayer(json))
    });
  }

  function readFile(file, callback){
    let reader = new FileReader();

    reader.onload = function(e){
      try{
        let json = JSON.parse(e.target.result)
        // dispatch(addLayer(json))
        callback(json);
      } catch(ex){
        alert('ex when trying to parse json = ' + ex);
      }
    }

    reader.readAsText(file);
  }


  function deleteLayer(file){
    readFile(file, function (json) {
      dispatch(removeLayer(json))
    });
  }



  return (
    <DropzoneArea 
        dropzoneText={"Drop Json-files here"} 
        filesLimit={4}
        dropZoneClass={"HalloKlasse"}
        dropzoneParagraphClass={"TekstDrop"}
        acceptedFiles= {['application/json/*']} 
        onDrop={setupReader}
        onDelete={deleteLayer}
        />
  )
}
 
export default connect()(Filedrop);