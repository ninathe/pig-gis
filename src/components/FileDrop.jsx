import React, {Component} from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
import { connect } from 'react-redux'
import { addLayer, removeLayer } from '../actions'


const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(addLayer(ownProps.layer))
})

class Filedrop extends Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      // layers: null,
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

            dispatch(addLayer(json))
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

    this.setupReader(files);
  }



  render(){
    return (
      <DropzoneArea 
        dropzoneText={"Drop Json-files here"} 
        filesLimit={1}
        dropZoneClass={"HalloKlasse"}
        dropzoneParagraphClass={"TekstDrop"}
        acceptedFiles= {['application/json/*']} 
        onChange={this.handleChange.bind(this)}
        showFileNames= {true}
        />
    )  
  }
} 
 
export default connect()(Filedrop);