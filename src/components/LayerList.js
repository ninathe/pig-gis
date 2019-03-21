import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import Layer from './Layer' 


const LayerList = ({ layers, updateLayerVisibility, updateLayerFill, updateLayerBorder, updateLayerName }) => (
  <List>
    {layers.length>0?(layers.map(layer =>
      <Layer
        layer={layer.name}
        updateLayerVisibility={updateLayerVisibility}
        updateLayerFill={updateLayerFill}
        updateLayerBorder={updateLayerBorder}
        updateLayerName={updateLayerName}
        {...layer}
        // onClick={() => toggleTodo(layer.id)}
      />
    )) : <div></div>}
    
  </List>
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
