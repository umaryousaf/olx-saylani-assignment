import { combineReducers } from 'redux'
import ads from './ads'
import auth from './auth'

export default combineReducers({
    ads,
    auth
})