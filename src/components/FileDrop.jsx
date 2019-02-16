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
  handleChange(files){
    // this.state.receivedJson;
    this.setState({
      files: files
    });
    alert("files received");
    console.log(files)
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