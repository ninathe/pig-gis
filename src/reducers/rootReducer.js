import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import layers from './layers';
export default combineReducers({
 simpleReducer, 
 layers
});