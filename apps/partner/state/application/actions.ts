import { createAction } from '@reduxjs/toolkit'

export const updateBlockNumber = createAction<{
  chainId: number
  blockNumber: number
}>('application/updateBlockNumber')
export const updateBlockTimestamp = createAction<{
  chainId: number
  blockTimestamp: number
}>('application/updateBlockTimestamp')
export const updateChainId = createAction<{ chainId: number }>('application/updateChainId')