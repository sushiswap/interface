// import { useWeb3React } from '@web3-react/core'
import { Token } from 'currency'
import { useMemo, useState } from 'react'
import NoSSR from 'react-no-ssr'
import MetaMaskCard from '../../components/connectors/MetaMaskCard'
import { filterTokens } from '../../functions/filtering'
import { useTokenComparator } from '../../functions/sorting'
import { useAllTokens } from '../../hooks/Tokens'
import useDebounce from '../../hooks/useDebounce'
import { useCombinedActiveList } from '../../state/lists/hooks'

export default function Incentive() {
  // const { account, activate, library, chainId } = useWeb3React()
  // const stakingContract = useStakingContract()
  // const tokenLists = useSelector( (state: DefaultRootState) => state.tokens.value)
  // const { store } = useContext(ReactReduxContext)
  // console.log(store)

  const tokens = useCombinedActiveList()
  const allTokens = useAllTokens()  
  // const [searchQuery, setSearchQuery] = useState<string>('')
  // const debouncedQuery = useDebounce(searchQuery, 200)
  const tokenComparator = useTokenComparator()

  // const filteredTokens: Token[] = useMemo(() => {
  //   return filterTokens(Object.values(allTokens), debouncedQuery)
  // }, [allTokens, debouncedQuery])

  const sortedTokens: Token[] = useMemo(() => {
    return Object.values(allTokens).sort(tokenComparator)
  }, [allTokens, tokenComparator])

  // const currencies = filterTokens(filteredTokens, debouncedQuery)
  // // console.log(currencies)  


  return (
    <div>
      <NoSSR>
        <MetaMaskCard />
      </NoSSR>
      <h1>Create Incentive</h1>
      Token:
      {sortedTokens.map((token, i) => (<li key={i}>{token.symbol} {}</li>)
      )}
      {/* <select onChange={(e) => setToken(e.target.value)}>
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
        
      </select> */}
    </div>
  )
}
