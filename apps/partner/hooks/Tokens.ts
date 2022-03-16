import { arrayify } from '@ethersproject/bytes'
import { parseBytes32String } from '@ethersproject/strings'
import { Token } from '@sushiswap/core-sdk'
import { hooks } from 'app/components/connectors/metaMask'
import { getContract } from 'app/functions'
import { isAddress } from 'app/functions/validate'
import { NEVER_RELOAD, useSingleCallResult } from 'app/state/multicall/hooks'
import ERC20_ABI from 'app/abis/ERC20.json'
import { useMemo } from 'react'
import { useBytes32TokenContract, useTokenContract } from './useContract'
import { Web3Provider } from '@ethersproject/providers'

// parse a name or symbol from a token response
const BYTES32_REGEX = /^0x[a-fA-F0-9]{64}$/

function parseStringOrBytes32(str: string | undefined, bytes32: string | undefined, defaultValue: string): string {
  return str && str.length > 0
    ? str
    : // need to check for proper bytes string and valid terminator
    bytes32 && BYTES32_REGEX.test(bytes32) && arrayify(bytes32)[31] === 0
    ? parseBytes32String(bytes32)
    : defaultValue
}

// undefined if invalid or does not exist
// null if loading or null was passed
// otherwise returns the token
export const getToken = async (chainId: number, provider: Web3Provider, tokenAddress?: string | null) => {
  const address = isAddress(tokenAddress)
  if (!address) {
    return null
  }

  const tokenContract = getContract(address, ERC20_ABI, provider)

  const [name, symbol, decimals] = await Promise.all([tokenContract?.name(), tokenContract?.symbol(), tokenContract?.decimals()])

  return new Token(
    chainId,
    tokenAddress,
    decimals,
    symbol,
    name,
  )
}
