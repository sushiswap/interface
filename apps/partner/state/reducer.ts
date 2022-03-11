import { combineReducers } from '@reduxjs/toolkit'
import lists from './lists/reducer'
import application from './application/reducer'
import multicall from './multicall/reducer'

const reducer = combineReducers({
    application,
    lists,
    multicall
})

export default reducer
