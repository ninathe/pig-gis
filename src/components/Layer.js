import React from 'react';
import PropTypes from 'prop-types';
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

class NestedList extends React.Component {
  state = {
    open: false,
    visible: this.props.visible
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  toggleVisibility = (e) =>{
    e.stopPropagation();
    this.setState(state => ({ visible: !state.visible }));
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
          {this.state.visible ? <Visibility button onClick={this.toggleVisibility} /> : <VisibilityOff button onClick={this.toggleVisibility} />}
          </ListItemIcon>
          <ListItemText inset primary={this.props.name} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Title />
              </ListItemIcon>
              <ListItemText inset primary="Edit name" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FormatColorFill />
              </ListItemIcon>
              <ListItemText inset primary="Fill color" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <BorderColor />
              </ListItemIcon>
              <ListItemText inset primary="Border color" />
            </ListItem>
            <Divider/>
          </List>
        </Collapse>
      </List>
    );
  }
}


NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);