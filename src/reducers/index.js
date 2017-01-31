import { combineReducers } from 'redux'
import citiesReducer from './reducer_cities'

const rootReducer = combineReducers({
  data: citiesReducer
});

export default rootReducer;
