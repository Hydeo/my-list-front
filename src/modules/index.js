import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import bim from '../reducers/basic_reducers.js'
export default combineReducers({
  routing: routerReducer,
  bim
})