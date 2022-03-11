// import { useWeb3React } from '@web3-react/core'
import { DefaultRootState, ReactReduxContext, RootStateOrAny, useSelector } from 'react-redux'
import MetaMaskCard from '../../components/connectors/MetaMaskCard'
import NoSSR from 'react-no-ssr'
import { createContext, useContext, useMemo, useState } from 'react'
import { stringify } from 'querystring'
import { TokenAddressMap, useAllLists, useCombinedActiveList } from '../../state/lists/hooks'
import { useAllTokens } from '../../hooks/Tokens'
import { Token } from 'currency'
import { WrappedTokenInfo } from '../../state/lists/wrappedTokenInfo'
import { filterTokens } from '../../functions/filtering'
import useDebounce from '../../hooks/useDebounce'
import { useTokenComparator } from '../../functions/sorting'

export default function Incentive() {
  // const { account, activate, library, chainId } = useWeb3React()
  // const stakingContract = useStakingContract()
  // const tokenLists = useSelector( (state: DefaultRootState) => state.tokens.value)
  // const { store } = useContext(ReactReduxContext)
  // console.log(store)

  const tokens = useCombinedActiveList()
  const allTokens = useAllTokens()  
  const [searchQuery, setSearchQuery] = useState<string>('')
  const debouncedQuery = useDebounce(searchQuery, 200)
  const tokenComparator = useTokenComparator()

  const filteredTokens: Token[] = useMemo(() => {
    return filterTokens(Object.values(allTokens), debouncedQuery)
  }, [allTokens, debouncedQuery])

  const sortedTokens: Token[] = useMemo(() => {
    return filteredTokens.sort(tokenComparator)
  }, [filteredTokens, tokenComparator])
  // console.log(sortedTokens)  

  const currencies = filterTokens(filteredTokens, debouncedQuery)
  // console.log(currencies)  


  return (
    <div>
      <NoSSR>
        <MetaMaskCard />
      </NoSSR>
      <h1>Create Incentive</h1>
      Token:
      <select onChange={(e) => setToken(e.target.value)}>
        { () => {
          Object.keys(allTokens).forEach((address) => {
            console.log(address)
            
          })
          return 
            <div>
              
            </div>
        // return <option value="mango">Mango</option>
        }
        }
        
      </select>
    </div>
  )
}
