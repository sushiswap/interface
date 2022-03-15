import { BigNumber } from '@ethersproject/bignumber'
import { MaxUint256 } from '@ethersproject/constants'
import { Token } from '@sushiswap/core-sdk'
import { hooks } from 'app/components/connectors/metaMask'
import { ApprovalState } from 'app/enums/ApprovalState'
import { useStakingContract, useTokenContract } from 'app/hooks/useContract'
import { useTransactionAdder } from 'app/state/transactions/hooks'
import { Fraction } from 'entities/bignumber'
import { useCallback, useEffect, useMemo, useState } from 'react'

const useTokenApproval = (token: Token) => {
  const account = hooks.useAccount()
  const [pendingApproval, setPendingApproval] = useState(false)
  const incentiveContract = useStakingContract(true)
  const addTransaction = useTransactionAdder()

  const tokenContract = useTokenContract(token?.address)
  const [allowance, setAllowance] = useState('0')

  const fetchAllowances = useCallback(async () => {
    if (account) {
      try {
        let allowance = await tokenContract?.allowance(account, incentiveContract?.address)

        const formattedAllowance = Fraction.from(
          BigNumber.from(allowance),
          BigNumber.from(10).pow(token?.decimals),
        ).toString()

        setAllowance(formattedAllowance)
      } catch (error) {
        setAllowance('0')
      }
    }
  }, [account, token?.decimals, incentiveContract?.address, tokenContract])

  useEffect(() => {
    if (account) {
      if (tokenContract && incentiveContract) {
        fetchAllowances()
      }
    }

    const refreshInterval = setInterval(fetchAllowances, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, fetchAllowances, tokenContract, incentiveContract])

  const approve = useCallback(async () => {
    try {
      setPendingApproval(true)

      let tx = await tokenContract?.approve(incentiveContract.address, MaxUint256.toString())

      addTransaction(tx, { summary: 'Approve' })
      await tx.wait()
      return tx
    } catch (e) {
      return e
    } finally {
      fetchAllowances()
      setPendingApproval(false)
    }
  }, [addTransaction, tokenContract, fetchAllowances, incentiveContract.address])

  const approvalState: ApprovalState = useMemo(() => {
    if (!account) return ApprovalState.UNKNOWN
    if (pendingApproval) return ApprovalState.PENDING
    //FIXME: This logic is the same as on meowshi, if the approval is already set, but less than amount, this will fail
    if (!allowance || Number(allowance) === 0) return ApprovalState.NOT_APPROVED

    return ApprovalState.APPROVED
  }, [account, allowance, pendingApproval])

  return { approve, approvalState }
}

export default useTokenApproval
