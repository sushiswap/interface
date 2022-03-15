import { hooks } from 'app/components/connectors/metaMask'
import { IncentiveCreationFormInputFormatted } from 'app/features/Incentive/IncentiveCreationForm'
import { useStakingContract } from 'app/hooks/useContract'
import { useTransactionAdder } from 'app/state/transactions/hooks'
import { useCallback } from 'react'

const useIncentiveCreate = () => {
  const account = hooks.useAccount()
  const addTransaction = useTransactionAdder()
  const contract = useStakingContract(true)

  const subscribe = useCallback(
    (event: string, cb) => {
      if (!contract) return

      contract.on(event, cb)
    },
    [contract],
  )

  const unsubscribe = useCallback(
    (event: string, cb) => {
      if (!contract) return

      contract.off(event, cb)
    },
    [contract],
  )

  const createIncentive = useCallback(
    async (data: IncentiveCreationFormInputFormatted) => {
      if (!contract) throw new Error('Contract not initialized')
      if (!account) throw new Error('Wallet not connected')
      const startDateUnix = data.startDate.getTime() / 1000
      const endDateUnix = data.endDate.getTime() / 1000

      const tx = await contract.createIncentive(
        data.pool.address,
        data.rewardToken.address,
        data.amount.toExact(),
        startDateUnix,
        endDateUnix,
      )

      addTransaction(tx, { summary: 'Initialize Incentive creation' })

      return tx
    },
    [account, contract, addTransaction],
  )

  return {
    subscribe,
    unsubscribe,
    createIncentive,
  }
}

export default useIncentiveCreate
