import React, { Component } from 'react'
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { TextField, Typography, IconButton, Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InfoIcon from '@material-ui/icons/Info';
import { addLayer } from '../../actions'


  //Styling material-ui component
  const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

class ToolsContent extends Component{
  constructor(props) {
    super(props);
    this.state = {chosenLayers: {}}
  }

  // Changehandler - selectionField 
  handleChange = name => event => {
    debugger
    let newLayers = this.state.chosenLayers;
    newLayers[name] = event.target.value
    this.setState({ ['chosenLayers']: newLayers });  //Update layers
  };

  // Changehandler - textField
  updateText = name => event => {
    this.setState({ [name]: event.target.value });
  };

  submitValues() { 
    var submitValues = {layers:[]}    //Object with data to submit
    for(var layer in this.state.chosenLayers){          //Adding all layers
      if(this.state.chosenLayers.hasOwnProperty(layer)){
        let layerdata = this.props.layers.filter(l => l.id == this.state.chosenLayers[layer])[0]
        submitValues.layers.push(layerdata)
      }
    }
    submitValues.textVal = this.state.textVal ? (this.state.textVal) : null; //Adding textVal if exsists
    let newLayer = this.props.submitForm(submitValues) //Creating a new layer
    this.props.addLayer(newLayer);                     //Adding layer to global state - Redux

    this.props.close();                                //Closing popup

  }

  getValidLayers(types) {           //each field can be filtered on different types i.e. Polygon and MultiPolygon
    let validLayers = []
    this.props.layers.forEach(layer => {
      types.forEach(type => {
        if(layer.features[0].geometry.type == type)
          validLayers.push(layer)
      });
    });
    return validLayers;
  }

  getFilteredLayers(field){           
    let validLayers = (field.type != undefined) ? getValidLayers(field.type) : this.props.layers
    return validLayers
  }

  render() {
    const actions = [
        <Button
          primary={true}
          form="myform"
          onClick={this.submitValues.bind(this)}
          >SUBMIT
          </Button>,
      ];
    let sfCounter = 0;
    return (
    <React.Fragment>
    {this.props.layers.length>0?
      <form className={this.props.classes.container} autoComplete="off" id = "myform">
      
        {this.props.selectionFields.map(field => (
            <TextField
            id="standard-select-currency"
            select
            label={field.value}
            className={this.props.classes.textField}
            value = {this.state.chosenLayers[field.id]}    
            onChange={this.handleChange(field.id)}        //updating textVal state
            SelectProps={{
              MenuProps: {
                className: this.props.classes.menu,
              },
            }}
            helperText={field.helperText}
            margin="normal"
          >
            {this.props.layers.map(layer => (             //All map layers 
              <MenuItem key={layer.id} value={layer.id}>
                {layer.name}
              </MenuItem>
            ))}
            {this.props.layers
                //FIND SOLUTION
                // .filter(layer =>{return layer.features[0].geometry.type == "Polygon"||layer.features[0].geometry.type == "MultiPolygon"}) //only Polygons and multipolygons are accepted
                .map(layer => (  
            <MenuItem key={layer.id} value={layer.id}>
              {layer.name}
            </MenuItem>
          ))}
            
          </TextField>
        
        ))
      
      }

        {this.props.textField ?         //Rendering textfield, if exsists
            <TextField
            id="standard-name"
            label={this.props.textField.value}
            className={this.props.classes.textField}
            onChange={this.updateText('textVal')}
            margin="normal"
            helperText={this.props.textField.helperText}
          /> : 
          null                          //return null if it doesn't   
        }
        
        <div>
            {actions} 
        </div> 
        
      </form>
    :
        <React.Fragment>
            <IconButton>
                <InfoIcon />
            </IconButton>
            <Typography variant="h7" color="inherit">
                Add layers in map. 
            </Typography>
        </React.Fragment>
    }   
    </React.Fragment>
      
    );
  }
}

//REDUX
const mapStateToProps = (state) => ({
  layers: state.layers
});

const mapDispatchToProps = {
  addLayer
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ToolsContent));