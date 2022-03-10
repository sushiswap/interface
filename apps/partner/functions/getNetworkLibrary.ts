import { Web3Provider } from '@ethersproject/providers'
import { network } from 'temp/src/wallets'

let networkLibrary: Web3Provider | undefined

export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}
