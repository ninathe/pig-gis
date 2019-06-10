import React from 'react'
//Material ui
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

export default LayerList
