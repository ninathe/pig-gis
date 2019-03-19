import store from '../'

let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const addLayer = layer => ({
  type: 'ADD_LAYER',
  layer
})

export const removeLayer = layer => ({
  type: 'REMOVE_LAYER',
  layer
})

export const updateLayers = layer => ({
  type: 'UPDATE_LAYERS',
  layer
})



export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}