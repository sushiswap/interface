import { useCallback } from 'react'
import { hooks } from 'app/components/connectors/metaMask'
import { useStakingContract } from 'app/hooks/useContract'
import { useTransactionAdder } from 'app/state/transactions/hooks'

const useStaking = () => {
  const account = hooks.useAccount()
  const addTransaction = useTransactionAdder()
  const contract = useStakingContract(true)

  const createIncentive = useCallback(
    async (poolAddres: string, rewardTokenAddress: string, amount: number, startDate: number, endDate: number) => {
      if (!contract) throw new Error('Contract not initialized')
      if (!account) throw new Error('Wallet not connected')

      const tx = await contract.createIncentive(poolAddres, rewardTokenAddress, amount, startDate, endDate)

      addTransaction(tx, { summary: 'Initialize Incentive creation' })

      return tx
    },
    [account, contract, addTransaction],
  )

  return {
    createIncentive,
  }
}

export default useStaking
