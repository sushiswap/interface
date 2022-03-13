// import { Token } from 'currency'
// import { FC, useMemo, useState } from 'react'
// import useStaking from 'app/features/Staking/useStaking'
// import { useTokenComparator } from 'app/functions/sorting'
// import { useAllTokens } from 'app/hooks/Tokens'
// import { toUnix } from 'app/functions/date'


// const CreateIncentiveForm: FC = () => {
//   const [pool, setPool] = useState<string>('')
//   const [rewardToken, setRewardToken] = useState<string>('')
//   const { createIncentive } = useStaking()
//   const [amount, setAmount] = useState<number>(0)

//   const allTokens = useAllTokens()
//   const tokenComparator = useTokenComparator()

//   const sortedTokens: Token[] = useMemo(() => {
//     return Object.values(allTokens).sort(tokenComparator)
//   }, [allTokens, tokenComparator])

//   const [startDate, setStartDate] = useState<Date>()
//   const [endDate, setEndDate] = useState<Date>()


//   const onSubmit = async () => {
//     createIncentive(pool, rewardToken, amount, toUnix(startDate), toUnix(endDate))
//   }

//   return (
//     <div>
//       <h1>Create Incentive</h1>
//       Pool:
//       <div>
//         <select onChange={(e) => setPool(e.target.value)}>
//           {[
//             ['DAI/WETH', '0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0'],
//             ['USDC/WETH', '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa']
//           ].map((value, i) => (
//             <option value={value[1]} key={i}>
//               {value[0]}
//             </option>
//           ))}
//         </select>
//       </div>
//       Reward Token:
//       <div>
//         <select onChange={(e) => setRewardToken(e.target.value)}>
//           {sortedTokens.map((token, i) => (
//             <option value={token.address} key={i}>
//               {token.symbol}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         Amount:
//         <div>
//           <input type="number" onChange={(e) => setAmount(parseInt(e.target.value))}></input>
//         </div>
//         <div>
//           <label>Start: </label>
//           <div>
//             <input type="datetime-local" onChange={(e) => setStartDate(new Date(e.target.value))}></input>
//           </div>
//         </div>
//         <div>
//           <label>End: </label>
//           <div>
//             <input type="datetime-local" onChange={(e) => setEndDate(new Date(e.target.value))}></input>
//           </div>
//         </div>
//         <button onClick={onSubmit}>Send reward</button>
//       </div>
//     </div>
//   )
// }
// export default CreateIncentiveForm