import { combineReducers } from '@reduxjs/toolkit'
import lists from './lists/reducer'
import application from './application/reducer'
import multicall from './multicall/reducer'
import web3Context from './global/web3ContextSlice'
import transactions from './transactions/reducer'

const reducer = combineReducers({
    application,
    lists,
    multicall,
    transactions,
    web3Context
})

export default reducer
