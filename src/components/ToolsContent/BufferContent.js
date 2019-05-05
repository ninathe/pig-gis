import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DialogContent, TextField } from '@material-ui/core';
// import DialogFeedback from './DialogFeedback';
// import LayersSelectSimple from '../LayersSelect';
// import LayerNameTextField from '../LayerNameTextField';
import MenuItem from '@material-ui/core/MenuItem';

/**
 * buffer options for the geoprocessing dialog
 */

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
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  class BufferContent extends Component {

    
    handleChange = event => {
      //Hva skal skje
    };
    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };
    
    render() {
      const { classes } = this.props;
      

      return (
        <DialogContent>
              {/* {errorMessage.length > 0 ?
                <DialogFeedback message={errorMessage} variant={'error'} />
                : null
              } */}

              {/* <LayersSelectSimple
                layers={layers}
                layerId={layerId}
                changeLayer={changeLayer} /> */}

                <div style={{margin: theme.spacing.unit}}>
                <TextField
                  value={distance}
                  label="Distance (m)"
                  onChange={this.handleChange}
                />
              <TextField
                id="standard-select-currency"
                select
                label="Select"
                // className={classes.textField}
                value={"Choose layer"}
                onChange={this.handleChange('currency')}
                SelectProps={{
                  MenuProps: {
                    // className: classes.menu,
                  },
                }}
                helperText="Select layer"
                margin="normal"
              >
                {currencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

                {/* <LayerNameTextField
                  layerName={outputName}
                  setName={setName}
                  defaultName={outputName}
                  layers={layers}
                  layerIndex={-1}
                  promt={'Output layer name'} />
                 */}
                  </div>

            </DialogContent>
      );
  
  
    }

  }

export default withStyles(styles, { withTheme: true })(BufferContent);