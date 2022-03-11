import { AddressZero } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'

import MULTICALL2_ABI from '../abis/multicall2.json'
import {
  MULTICALL2_ADDRESS,
} from '@sushiswap/core-sdk'
import { hooks } from '../components/connectors/metaMask'
import { useMemo } from 'react'
import { getContract } from '../functions/contract'


// returns null on errors
export function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const library = hooks.useProvider()
  const account = hooks.useAccount()
  return useMemo(() => {
    if (!address || address === AddressZero || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}


export function useMulticall2Contract() {
  const chainId = hooks.useChainId()
  return useContract(chainId ? MULTICALL2_ADDRESS[chainId] : undefined, MULTICALL2_ABI, false)
}