// import { Token } from 'currency'
// import { useMemo } from 'react'
// import { useERC20 } from './useContract'

// export const useToken = async (chainId: number, address: string) => {
//   const contract = useERC20(address)
//   // ping contract?

//   return useMemo(async () => {
//     if (address === '' && !contract) {
//       return null
//     }

//     let decimals = await contract.decimals()
//     let symbol = await contract.symbol()
//     let name = await contract.name()
//     console.log(decimals, symbol, name)
//     return new Token({ chainId, address, decimals, symbol, name })
//   }, [chainId, address, contract])
// }
