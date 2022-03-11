import { nanoid } from '@reduxjs/toolkit'
import { TokenList } from '@uniswap/token-lists'
import { useCallback } from 'react'
import { hooks } from '../components/connectors/metaMask'
import { ChainId } from '../enums/ChainId'
import { resolveENSContentHash } from '../functions/ens'
import { getTokenList } from '../functions/list'
import { useAppDispatch } from '../state/hooks'
import { useWeb3React } from 'web3-react-core-v6'
import { fetchTokenList } from '../state/lists/actions'

export function useFetchListCallback(): (listUrl: string, sendDispatch?: boolean) => Promise<TokenList> {
  const { useProvider } = hooks
  const { chainId, library } = useWeb3React()
  const networkProvider = useProvider()
  const dispatch = useAppDispatch()

  const ensResolver = useCallback(
    (ensName: string) => {
      if (!library || chainId !== ChainId.ETHEREUM) {
        if (chainId === ChainId.ETHEREUM) {
          const networkLibrary = networkProvider
          if (networkLibrary) {
            return resolveENSContentHash(ensName, networkLibrary)
          }
        }
        throw new Error('Could not construct mainnet ENS resolver')
      }
      return resolveENSContentHash(ensName, library)
    },
    [chainId, library, networkProvider],
  )

  // note: prevent dispatch if using for list search or unsupported list
  return useCallback(
    async (listUrl: string, sendDispatch = true) => {
      const requestId = nanoid()
      sendDispatch && dispatch(fetchTokenList.pending({ requestId, url: listUrl }))
      return getTokenList(listUrl, ensResolver)
        .then((tokenList) => {
          sendDispatch && dispatch(fetchTokenList.fulfilled({ url: listUrl, tokenList, requestId }))
          return tokenList
        })
        .catch((error) => {
          console.debug(`Failed to get list at url ${listUrl}`, error)
          sendDispatch &&
            dispatch(
              fetchTokenList.rejected({
                url: listUrl,
                requestId,
                errorMessage: error.message,
              }),
            )
          throw error
        })
    },
    [dispatch, ensResolver],
  )
}
