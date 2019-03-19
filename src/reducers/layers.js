let initialState = {
  layers: [],
}

const layers = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_LAYER':
      return { 
        ...state,
        layers: state.layers.concat(action.layer)
      }

      case 'REMOVE_LAYER':
        return { 
          ...state,
          layers: state.layers.filter(function(layer){return layer != action.layer })
        }

      case 'UPDATE_LAYERS':
        return { 
          // debugger
          // ...state,
          // layers: state.layers.filter(function(layer){return layer != action.layer })
        }

      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  
  export default layers