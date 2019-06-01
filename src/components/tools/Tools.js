import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
// import { updateLayers } from "../actions";
import { Layer } from 'react-mapbox-gl';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';



const tools = [
    {
      value: 'Within',
      icon: <InboxIcon />,
    },
    {
        value: 'Buffer',
        icon: <InboxIcon />,
    },
    {
      value: 'Intersection',
      icon: <InboxIcon />,
    },
    {
      value: 'Difference',
      icon: <InboxIcon />,
    },
  ];
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

class Tools extends Component{
  constructor(props) {
    super(props);
    this.state = {
      layersInMap: [],
    };
  }

  buttonClick(e,value){
      console.log(value)
      this.props.btnClicked(value)
  }

  render() {
    return (
      <React.Fragment>

        {tools.map(tool => (
            <ListItem  id = {tool.value} onClick={((e) => this.buttonClick(e, tool.value))}>
                <ListItemIcon>
                    {tool.icon}
                </ListItemIcon>
                <ListItemText primary={tool.value} />
            </ListItem>
        ))}
      </React.Fragment>
    );
  }
}

export default Tools;