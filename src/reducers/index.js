import {combineReducers} from "redux"
import list from './list'
import user from './user'
import details from './details'

export default combineReducers({
    list,
    user,
    details
})