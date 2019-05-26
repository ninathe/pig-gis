import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { updateLayers } from "../actions";
import { Layer } from 'react-mapbox-gl';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';


const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    float: "right",
    bottom: '80px',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class ToolsPopup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      layersInMap: [],
    };
  }


  componentDidMount() {
    
  }

  componentDidUpdate() {
    this.updateMapLayers()
  }

  updateMapLayers(){
    console.log("UPDATEING MAP LAYERS")
    console.log(this.props.layers)
  }

  addLayers(){
    for (let i = 0; i < this.props.layers.length; i++) {
      this.addLayerByType(this.props.layers[i]);
    }
    this.state.layersInMap = this.props.layers;
  }


  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <React.Fragment>
      <ListItem button>
          <ListItemIcon>
              <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Within" />
      </ListItem>
      <ListItem button>
          <ListItemIcon>
              <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Buffer" />
      </ListItem>
      <ListItem button>
          <ListItemIcon>
              <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Intersection" />
      </ListItem>
      <ListItem button>
          <ListItemIcon>
              <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Difference" />
      </ListItem>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  layers: state.layers
});

const mapDispatchToProps = {
  updateLayers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolsPopup);