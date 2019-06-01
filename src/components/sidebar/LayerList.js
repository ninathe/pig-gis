import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader';
import Layer from './Layer' 


const LayerList = ({ layers, updateLayerVisibility, updateLayerFill, updateLayerBorder, updateLayerName, deleteLayer }) => (
  <React.Fragment>
    {layers.length>0?<ListSubheader>LAYERS</ListSubheader>:null}
    <List>
      {layers.length>0?(layers.map(layer =>
        <Layer
          key={layer.id}
          layer={layer.name}
          updateLayerVisibility={updateLayerVisibility}
          updateLayerFill={updateLayerFill}
          updateLayerBorder={updateLayerBorder}
          updateLayerName={updateLayerName}
          deleteLayer={deleteLayer}
          {...layer}
        />
      )) : <div></div>}
      
    </List>
  </React.Fragment>
  
)


LayerList.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default LayerList
