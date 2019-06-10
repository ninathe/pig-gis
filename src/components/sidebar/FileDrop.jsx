import React, {Component} from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
//Redux
import { connect } from 'react-redux'
import { addLayer } from '../../actions'
import '../../styles/App.css'           //css
import formatJson from '../utils';      //Utils


const Filedrop = ({dispatch}) => {
  
  function setupReader(file) {
    readFile(file, function (json) {
    dispatch(addLayer(json))                            //Add file to database
    });
  }

  function readFile(file, callback){
    let reader = new FileReader();

    reader.onload = function(e){
      try{
        let json = JSON.parse(e.target.result)
        callback(formatJson(json));                        //Formating json 
      } catch(ex){
        alert('ex when trying to parse json = ' + ex);    //Can't parse json
      }
    }

    reader.readAsText(file);
  }

  //When deleting layer --> Update state (dispatch deleteLayer)
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