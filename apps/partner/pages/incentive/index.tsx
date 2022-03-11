// import { useWeb3React } from '@web3-react/core'
import { DefaultRootState, ReactReduxContext, RootStateOrAny, useSelector } from 'react-redux'
import MetaMaskCard from '../../components/connectors/MetaMaskCard'
import NoSSR from 'react-no-ssr'
import { createContext, useContext, useState } from 'react'
import { stringify } from 'querystring'
import { useAllLists, useCombinedActiveList } from '../../state/lists/hooks'
import { useAllTokens } from '../../features/hooks/Tokens'

export default function Incentive() {
  // const { account, activate, library, chainId } = useWeb3React()
  // const stakingContract = useStakingContract()
  // const tokenLists = useSelector( (state: DefaultRootState) => state.tokens.value)
  // const { store } = useContext(ReactReduxContext)
  // console.log(store)

  const tokens = useCombinedActiveList()
  const defaultTokens = useAllTokens()
  console.log(defaultTokens)  


  return (
    <div>
      <NoSSR>
        <MetaMaskCard />
      </NoSSR>
      <h1>Create Incentive</h1>
      Token:
      <select onChange={(e) => setToken(e.target.value)}>
        { () => {
          
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
