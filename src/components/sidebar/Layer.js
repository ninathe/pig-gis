import React from 'react';
//Components from Material ui: 
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Title from '@material-ui/icons/Title';
import FormatColorFill from '@material-ui/icons/FormatColorFill';
import BorderColor from '@material-ui/icons/BorderColor';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Divider from '@material-ui/core/Divider';
import ColorPicker from 'material-ui-color-picker'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';


//styling for material-ui component
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Layer extends React.Component {
  state = {
    open: false,
    visible: this.props.visible,
    layerName: this.props.name
  }

  handleClick = () => {           //Toggle open
    this.setState(state => ({ open: !state.open }));
  }

  //Edit layer
  changeFillColor = (color) =>{   
    if(color!=undefined)
      this.props.updateLayerFill(this.props.id, color)
  }
   
  changeBorderColor = (color) =>{
    if(color!=undefined)
      this.props.updateLayerBorder(this.props.id, color)
  }

  changeName = () =>{
    this.props.updateLayerName(this.props.id, this.state.layerName)
  }


  //When textfield is updating 
  updateInput=(e)=>{
    this.setState({layerName: e.target.value})
  }

  deleteLayer = () =>{
    if(window.confirm("Are you sure you want to delete the layer: "+ this.props.name))
      this.props.deleteLayer(this.props.id)
  }
  
  toggleVisibility = (e) =>{
    e.stopPropagation();
    this.setState(state => ({ visible: !state.visible }));
    this.props.updateLayerVisibility(this.props.id, (this.props.visible == "visible"? "none":"visible"))
  }

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        className={classes.root}
      >
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
          {this.props.visible == "visible" ? <Visibility button onClick={this.toggleVisibility.bind(this)} /> : <VisibilityOff button onClick={this.toggleVisibility} />}
          </ListItemIcon>
          <ListItemText inset primary={this.props.name} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem  className={classes.nested} >
              <ListItemIcon>
                <Title />
              </ListItemIcon>
              <TextField
                onChange={this.updateInput.bind(this)}
                id="standard-dense"
                label="Edit name"
                margin="dense"
              />
              <IconButton className={classes.iconButton} aria-label="Change" onClick={this.changeName.bind(this)}>
                <DoneIcon />
              </IconButton>

            </ListItem> 
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FormatColorFill />
              </ListItemIcon>
              <ListItemText inset primary="Fill color" />
              <ColorPicker
                name='color'
                defaultValue={this.props.fillColor}
                onChange={this.changeFillColor.bind(this)}
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <BorderColor />
              </ListItemIcon>
              <ListItemText inset primary="Border color" />
              <ColorPicker
                name='color'
                defaultValue={this.props.borderColor}
                onChange={this.changeBorderColor.bind(this)}
              />
            </ListItem>
            <ListItem  className={classes.nested}>
            <Button 
              color="secondary" 
              className={classes.button}
              onClick={this.deleteLayer.bind(this)}>
              Delete layer
            </Button>
            <Divider/>
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}


export default withStyles(styles)(Layer);