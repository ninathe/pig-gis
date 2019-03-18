const ADD_TODO = 'ADD_TODO'

function addFile(text) {
    return {
      type: ADD_TODO,
      text
    }
  }