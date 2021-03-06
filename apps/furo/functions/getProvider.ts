import { JsonRpcProvider, InfuraProvider } from '@ethersproject/providers'

import { ChainId } from '@sushiswap/chain'
import { getInfuraChainName } from './getInfuraChainName'

const providerCache: Partial<Record<ChainId, JsonRpcProvider>> = {}

export function getProvider(chainId: ChainId) {
  if (providerCache[chainId]) return providerCache[chainId]!
  const infuraKey = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID
  if (!infuraKey) throw new Error('NEXT_PUBLIC_INFURA_PROJECT_ID is required for provider')
  const name = getInfuraChainName(chainId)
  providerCache[chainId] = new InfuraProvider(name, infuraKey)
  return providerCache[chainId]!
}