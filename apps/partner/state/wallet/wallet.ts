import { useMemo } from "react"
import { hooks } from "../../components/connectors/network"
import { useAllTokens } from "../../hooks/Tokens"
import { Currency, CurrencyAmount, JSBI, NATIVE, Token } from '@sushiswap/core-sdk'
import { isAddress } from "../../functions"
import ERC20_ABI from '../../abis/ERC20.json'
import { TokenBalancesMap } from "./types"
import { Interface } from "@ethersproject/abi"
import { useMultipleContractSingleData } from "../multicall/hooks"


export function useAllTokenBalances(): TokenBalancesMap {
    const account = hooks.useAccount()
    const allTokens = useAllTokens()
    const allTokensArray = useMemo(() => Object.values(allTokens ?? {}), [allTokens])
    return useTokenBalances(account ?? undefined, allTokensArray)
  }


export function useTokenBalances(address?: string, tokens?: (Token | undefined)[]): TokenBalancesMap {
    return useTokenBalancesWithLoadingIndicator(address, tokens).data
  }
  
/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
 export function useTokenBalancesWithLoadingIndicator(
  address?: string,
  tokens?: (Token | undefined)[]
): { data: TokenBalancesMap; loading: boolean } {
  const validatedTokens: Token[] = useMemo(
    () => tokens?.filter((t?: Token): t is Token => isAddress(t?.address) !== false) ?? [],
    [tokens]
  )

  const validatedTokenAddresses = useMemo(() => validatedTokens.map((vt) => vt.address), [validatedTokens])
  validatedTokenAddresses.forEach
  const ERC20Interface = new Interface(ERC20_ABI)
  const balances = useMultipleContractSingleData(
    validatedTokenAddresses,
    ERC20Interface,
    'balanceOf',
    [address],
    undefined,
    100_000
  )

  const anyLoading: boolean = useMemo(() => balances.some((callState) => callState.loading), [balances])

  return useMemo(
    () => ({
      data:
        address && validatedTokens.length > 0
          ? validatedTokens.reduce<TokenBalancesMap>((memo, token, i) => {
              const value = balances?.[i]?.result?.[0]
              const amount = value ? JSBI.BigInt(value.toString()) : undefined
              if (amount) {
                memo[token.address] = CurrencyAmount.fromRawAmount(token, amount)
              }
              return memo
            }, {})
          : {},
      loading: anyLoading,
    }),
    [address, validatedTokens, anyLoading, balances]
  )
}