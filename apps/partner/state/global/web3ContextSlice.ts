import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Web3ReactStateUpdate } from '@web3-react/types'
import { AppState } from 'app/state'

export interface Web3ReactContext {
  chainId?: Web3ReactStateUpdate['chainId']
  account?: Web3ReactStateUpdate['accounts']
}

const initialState: Web3ReactContext = {}

export const web3ContextSlice = createSlice({
  name: 'web3Context',
  initialState,
  reducers: {
    updateWeb3Context: (state, action: PayloadAction<Web3ReactContext>) => {
      return action.payload
    },
  },
})

export const { updateWeb3Context } = web3ContextSlice.actions

export const selectWeb3Context = (state: AppState) => state.web3Context

export default web3ContextSlice.reducer
