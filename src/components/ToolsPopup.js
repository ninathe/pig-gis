import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import BuildIcon from '@material-ui/icons/Build';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Buffer from './ToolsContent/Buffer';
import Within from './ToolsContent/BufferContent2';
import Intersection from './ToolsContent/BufferContent2';
import Difference from './ToolsContent/BufferContent2';


import Tools from './ToolsContent/Tools';




function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
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

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
  state = {
    open: false,
    selectedTool: null
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  ButtonClicked= (btn) => {
    
    this.setState({
      selectedTool: btn,
    });
    console.log(this.state)
  }  

  getContent = () => {
    switch(this.state.selectedTool) {
      case 'Within':
        return <ListItem><Within></Within></ListItem>;
      case 'Buffer':
        return <ListItem><Buffer></Buffer></ListItem>;
      case 'Intersection':
        return <ListItem><Intersection></Intersection></ListItem>;
      case 'Difference':
        return <ListItem><Difference></Difference></ListItem>;
      default:
        return <Tools btnClicked= {this.ButtonClicked}></Tools>;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Fab color="secondary" aria-label="Edit" className={classes.fab} onClick={this.handleClickOpen}>
            <BuildIcon/>
        </Fab>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Tools
          </DialogTitle>
          <DialogContent>
            <List component="nav">
              {/* <Tools btnClicked= {this.ButtonClicked}></Tools>
              {this.state.selectedTool==null?<Tools btnClicked= {this.ButtonClicked}></Tools>:<ListItem>
                  <Buffer></Buffer>
                </ListItem>} */}
                {/* <ListItem>
                  <Buffer></Buffer>
                </ListItem> */}
                {this.getContent()}
            </List>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}



export default withStyles(styles)(CustomizedDialogDemo);
