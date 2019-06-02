import { combineReducers } from 'redux'
import layers from './layers'
import simpleReducer from './simpleReducer'

export default combineReducers({
    layers,
})