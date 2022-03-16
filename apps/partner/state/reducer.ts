import { combineReducers } from '@reduxjs/toolkit'
import application from './application/reducer'
import multicall from './multicall/reducer'
import web3Context from './global/web3ContextSlice'
import transactions from './transactions/reducer'

const reducer = combineReducers({
    application,
    multicall,
    transactions,
    web3Context
})

export default reducer
