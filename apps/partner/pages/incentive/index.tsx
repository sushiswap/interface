import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'

import { useEffect, useState } from 'react'
import { STAKING_ADDRESS, useStakingContract } from '../../hooks/useContract'


const DEFAULT_END_DATE = new Date()
DEFAULT_END_DATE.setDate(DEFAULT_END_DATE.getDate() + 7)

export default function Incentive() {
  const { account, activate, library, chainId } = useWeb3React()
  const stakingContract = useStakingContract()

  const [tokenAddress, setTokenAddress] = useState<string>('0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0')
  const [rewardTokenAddress, setRewardTokenAddress] = useState<string>('0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa')
  const [amount, setAmount] = useState<string>('')
  const [duration, setDuration] = useState<number>(28)


  useEffect(() => {
    ;(async function () {
      console.log(chainId)
      if (chainId !== 42) {
        await library?.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }],
        })
      }
    })()
  }, [chainId])

  const connect = () =>
    activate(
      new InjectedConnector({}),
      (err) => {
        console.log(err)
      },
      true,
    )

  function toUnix(date: Date): string {
    return (date.getTime() / 1000).toFixed().toString()
  }

  const onSubmit = async () => {
    if (!account) {
      connect();
      console.log('submit')
      return;
    }
  }

  return (
      <div>
        <h1>Create Incentive</h1>
        <button className="p-4 m-4 border cursor-pointer" onClick={connect}>
          {!account ? 'Connect Wallet' : `${account?.slice(0, 5)}...${account?.slice(-4)}`}
        </button>

        <div>
          <div>
            <label>Token address: </label>
            <br />
            <input
              onChange={(e) => setTokenAddress(e.target.value)}
              placeholder="0x6.."
            ></input>
          </div>

          <div>
            <label>Token Reward address: </label>
            <br />
            <input
              onChange={(e) => setRewardTokenAddress(e.target.value)}
              placeholder="0x6B.."
            />
          </div>

          <div>
            <label>Amount: </label>
            <br />
            <input onChange={(e) => setAmount(e.target.value)} placeholder="10.235134" />
          </div>

          <div>
            <label>Duration (days): </label>
            <br />
            <input onChange={(e) => setDuration(e.target.valueAsNumber)} placeholder={`${duration}`} />
          </div>

          <div>
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
  )
}
