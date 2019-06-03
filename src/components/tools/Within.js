import React, { Component } from 'react'
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { TextField, Typography, IconButton, Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InfoIcon from '@material-ui/icons/Info';
import * as turf from '@turf/turf'
import { addLayer } from '../../actions'
import formatJson from '../utils';



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

class WithinContent extends Component{
  constructor(props) {
    super(props);
    this.state = {
        layer1: null, //Points
        layer2: null  //Polygon/Multipolygon    
    }
  }

  // Changehandler - layerselect 
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  submitWithin(){
    if(this.state == null || this.state.layer1 == null || this.state.layer2 == null){
      alert("Velg to lag til kalkulering")
    } 
    else{
      let geom1 = this.props.layers.filter(layer => layer.id == this.state.layer1)[0];
      let geom2 = this.props.layers.filter(layer => layer.id == this.state.layer2)[0];
      let within = turf.pointsWithinPolygon(geom1, geom2);      //Witn´ geojson
      if(within != null){
        let withinName = geom1.name+"_"+geom2.name + "_Within"
        this.props.addLayer(formatJson(within,withinName, true, 0.5))    //formatJson within-geojson, name, noBorder, fill-opacity
        this.props.close();
      }
      
    } 
   
  }


  render() {
    const actions = [
        <Button
          primary={true}
          form="myform"
          onClick={this.submitWithin.bind(this)}
          >SUBMIT
          </Button>,
      ];

    return (
    <React.Fragment>
    {this.props.layers.length>0?
      <form className={this.props.classes.container} autoComplete="off" id = "myform">
        <TextField
          id="layer1-select"
          select
          label="Layer 1"
          className={this.props.classes.textField}
          value = {this.state.layer1}
          onChange={this.handleChange('layer1')}
          SelectProps={{
            MenuProps: {
              className: this.props.classes.menu,
            },
          }}
          helperText="Select point-layer"
          margin="normal"
        >
          
          {this.props.layers
          .filter(layer =>{return layer.features[0].geometry.type == "Point"}) //only Points are accepted
          .map(layer => (  
            <MenuItem key={layer.id} value={layer.id}>
              {layer.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="layer2-select"
          select
          label="Layer 2"
          className={this.props.classes.textField}
          value = {this.state.layer2}
          onChange={this.handleChange('layer2')}
          SelectProps={{
            MenuProps: {
              className: this.props.classes.menu,
            },
          }}
          helperText="Select layer"
          margin="normal"
        >

          {this.props.layers
          .filter(layer =>{return layer.features[0].geometry.type == "Polygon"||layer.features[0].geometry.type == "MultiPolygon"}) //only Polygons and multipolygons are accepted
          .map(layer => (  
            <MenuItem key={layer.id} value={layer.id}>
              {layer.name}
            </MenuItem>
          ))}
        </TextField>
        
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
)(withStyles(styles)(WithinContent));