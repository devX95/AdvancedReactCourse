import { combineReducers } from 'redux'
import { reducer as fromReducer} from 'redux-form'
import authReducer from './auth'

export default combineReducers({
  auth: authReducer,
  form: fromReducer
})