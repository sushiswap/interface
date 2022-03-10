// import { useWeb3React } from '@web3-react/core'
// import { InjectedConnector } from '@web3-react/injected-connector'
// import { Web3Provider } from '@ethersproject/providers'
// import { Web3ReactProvider } from '@web3-react/core'

// import { useEffect, useState } from 'react'
// // import { STAKING_ADDRESS, useERC20, useStakingContract } from '../../hooks/useContract'
// import { Contract } from '@ethersproject/contracts'
// import ERC20_ABI from '../../abis/ERC20.json'
// // import { useToken } from '../../hooks/useToken'
// import {BigintIsh} from 'math'

// const DEFAULT_END_DATE = new Date()
// DEFAULT_END_DATE.setDate(DEFAULT_END_DATE.getDate() + 7)

// export default function Incentive() {
//   // const { account, activate, library, chainId } = useWeb3React()
//   // const stakingContract = useStakingContract()

//   const [tokenAddress, setTokenAddress] = useState<string>('') //0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0
//   // const token = useToken(chainId, tokenAddress)
//   const [tokenApproved, setTokenApproved] = useState<boolean>(false)
//   const [tokenAllowance, setTokenAllowance] = useState<BigintIsh>(0) //0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0
//   const [isLoading, setIsLoading] = useState<boolean>(false) //0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0

//   // const tokenContract = useERC20('')
//   const [rewardTokenAddress, setRewardTokenAddress] = useState<string>('') //0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa
//   // const rewardTokenContract = useERC20('')
//   const [rewardTokenApproved, setRewardTokenApproved] = useState<boolean>(false)

//   const [amount, setAmount] = useState<number>(123)
//   const [duration, setDuration] = useState<number>(28)
//   const [inputError, setInputError] = useState<string>('Submit')

//   useEffect(() => {
//     ;(async function () {
//       if (chainId !== 42) {
//         await library?.provider.request({
//           method: 'wallet_switchEthereumChain',
//           params: [{ chainId: '0x42' }],
//         })
//       }
//     })()
//   }, [chainId])

//   useEffect(() => {
//     validate()
//   }, [])

//   const validate = () => {
//     if (!account) {
//       connect()
//     }
//     // validateToken(tokenAddress, 'Token')
//     // validateToken(rewardTokenAddress, 'Reward Token')
//   }

//   // const validateToken = async (tokenAddress: string, tokenType: string) => {
//   //   if (tokenAddress !== '') {
//   //     let isValid = (await token).decimals !== null
//   //     if (isValid) {
//   //       let erc20Contract = new Contract(tokenAddress, ERC20_ABI, account ? library.getSigner(account) : library)

//   //       // try {
//   //         // populate token object

//   //         // let amountDecimals = amount
//   //         setTokenAllowance((await erc20Contract.allowance(account, STAKING_ADDRESS)))
//   //         if (tokenAllowance > amount) {
//   //           // console.log(`${tokenType} OK, no need to approve.`)
//   //         } else {
//   //           // console.log(`${tokenType} too low, need to approve`)
//   //           await erc20Contract.approve(STAKING_ADDRESS, 10^((await token).decimals)).wait(() => {
//   //           setInputError(`Approve ${tokenType}`)
//   //           setTokenApproved(true)
//   //         })
//   //         }

//   //     }
      
//   //   }
//   // }

//   const connect = () => activate(new InjectedConnector({}))

//   function toUnix(date: Date): string {
//     return (date.getTime() / 1000).toFixed().toString()
//   }

//   const onSubmit = async () => {
//     if (!account) {
//       connect()
//     }

//     validate()
//     let endDate = new Date()
//     endDate.setDate(endDate.getDate() + duration)

//     // await stakingContract.createIncentive(tokenAddress, rewardTokenAddress, amount, toUnix(new Date()), toUnix(endDate))
//   }

//   return (
//     <div>
//       <h1>Create Incentive</h1>
//       <button className="p-4 m-4 border cursor-pointer" onClick={connect}>
//         {!account ? 'Connect Wallet' : `${account?.slice(0, 5)}...${account?.slice(-4)}`}
//       </button>

//       <div>
//         <div>
//           <br />
//           SLP 0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0
//           <br />
//           MEOW 0x83D0346Ff4E2fc634C91050973e3AE54b3a95615
//           <br />
//           DAI 0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa
//           <br />
//           <br />
//           <br />
//           <br />
//           <label>Token address: </label>
//           <input onChange={(e) => setTokenAddress(e.target.value)} placeholder="0x6.."></input>
//         </div>

//         <div>
//           <label>Token Reward address: </label>
//           <input onChange={(e) => setRewardTokenAddress(e.target.value)} placeholder="0x6B.." />
//         </div>

//         <div>
//           <label>Amount: </label>
//           <input onChange={(e) => setAmount(e.target.value)} placeholder="10.235134" />
//         </div>

//         <div>
//           <label>Duration (days): </label>
//           <input onChange={(e) => setDuration(e.target.valueAsNumber)} placeholder={`${duration}`} />
//         </div>

//         <div>
//           <button onClick={onSubmit} disabled={inputError !== null}>
//             {inputError === null ? 
//             isLoading ? 'Loading..'
//             : 
//             'Sumbit' : inputError}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
