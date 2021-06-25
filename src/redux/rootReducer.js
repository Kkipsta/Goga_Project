import { combineReducers } from 'redux'
import userReducer from './user/useReducer'
import ResourcesUseReducer from "./resources/ResourcesUseReducer"


const rootReducer = combineReducers({
  user: userReducer,
  resource:ResourcesUseReducer
})

export default rootReducer