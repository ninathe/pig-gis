import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import Layer from './Layer' 
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'




const LayerList = ({ layers, addLayers }) => (
  <List>
    {layers.map(layer =>
      <Layer
        key={layer.id}
        {...layer}
        // onClick={() => toggleTodo(layer.id)}
      />
    )}
  </List>
)

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

LayerList.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default LayerList
