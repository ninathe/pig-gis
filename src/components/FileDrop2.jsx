import React, {Component} from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
import { connect } from 'react-redux'
import { addLayer, deleteLayer } from '../actions'
import '../App.css'
import formatJson from './utils';



const Filedrop = ({dispatch}) => {
  
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
        callback(formatJson(json));
      } catch(ex){
        alert('ex when trying to parse json = ' + ex);
      }
    }

    reader.readAsText(file);
  }

  function deleteLayer(file){
    readFile(file, function (json) {
      dispatch(deleteLayer(json))
    });
  }

  return (
    <DropzoneArea 
        dropzoneText={"Drop Json-files here"} 
        filesLimit={8}
        dropZoneClass={"HalloKlasse"}
        dropzoneParagraphClass={"TekstDrop"}
        acceptedFiles= {['application/json/*']} 
        onDrop={setupReader}
        onDelete={deleteLayer}
        showPreviewsInDropzone={false}
        />
  )
}
 
export default connect()(Filedrop);