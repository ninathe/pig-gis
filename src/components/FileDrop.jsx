import React, {Component} from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
 
class Filedrop extends Component{
  constructor(props){
    super(props);
    this.state = {
      // receivedJson: this.props.receivedJson,
      files: [],
      
    };
  }
  


  setupReader(files) {
    var json;
    var jsonFiles = [];
    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      var reader = new FileReader();
  
      // Closure to capture the file information.
      reader.onload = (function (theFile) {
        return function (e) {
          try {
            json = JSON.parse(e.target.result);
            jsonFiles.push(json);
          } catch (ex) {
            alert('ex when trying to parse json = ' + ex);
          }
        }
      })(f);
      reader.readAsText(f);
    }

    console.log(jsonFiles);
  
  }





  handleChange(files){
    // this.state.receivedJson;
    this.setState({
      files: files
    });
    this.props.updateMapLayers(files);
  
    alert("files received");
    console.log(files);
    this.setupReader(files);
  }



  render(){
    return (
      <DropzoneArea 
        dropzoneText={"Drop Json-files here"} 
        filesLimit={4}
        dropZoneClass={"HalloKlasse"}
        dropzoneParagraphClass={"TekstDrop"}
        acceptedFiles= {['application/json/*']} //TODO: Add support for geoJson aswell
        onChange={this.handleChange.bind(this)}
        showFileNames= {true}
        />
    )  
  }
} 
 
export default Filedrop;