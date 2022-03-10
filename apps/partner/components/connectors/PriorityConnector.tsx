import { getPriorityConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import type { Connector } from '@web3-react/types'
import { hooks as metaMaskHooks, metaMask } from './metaMask'
import { hooks as networkHooks, network } from './network'

function getName(connector: Connector) {
  if (connector instanceof MetaMask) return 'MetaMask'
  if (connector instanceof Network) return 'Network'
  return 'Unknown'
}

const { usePriorityConnector } = getPriorityConnector(
  [metaMask, metaMaskHooks],
  [network, networkHooks]
)



export default function PriorityConnector() {
  const priorityConnector = usePriorityConnector()
  console.log(`Priority Connector: ${getName(priorityConnector)}`)
  return null
}
