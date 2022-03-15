import { BigNumber } from '@ethersproject/bignumber'
import { MaxUint256 } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import LoadingCircle from 'app/animation/loading-circle.json'
import Button from 'app/components/Button'
import { hooks } from 'app/components/connectors/metaMask'
import Dots from 'app/components/Dots'
import HeadlessUIModal from 'app/components/Modal/HeadlessUIModal'
import Typography from 'app/components/Typography'
import { ApprovalState } from 'app/enums/ApprovalState'
import { IncentiveCreationFormInputFormatted } from 'app/features/Incentive/IncentiveCreationForm'
import { useStakingContract, useTokenContract } from 'app/hooks/useContract'
import { useTransactionAdder } from 'app/state/transactions/hooks'
import { Fraction } from 'entities/bignumber'
import Lottie from 'lottie-react'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import useIncentiveCreate from './context/hooks/useIncentiveCreate'
import useTokenApproval from './context/hooks/useTokenApproval'
import IncentiveCreationSubmittedModalContent from './IncentiveCreationSubmittedModalContent'

interface IncentiveCreationModalProps {
  open: boolean
  onDismiss(): void
  data?: IncentiveCreationFormInputFormatted
}

const IncentiveCreationReviewModal: FC<IncentiveCreationModalProps> = ({ open, onDismiss: _onDismiss, data }) => {
  const chainId = hooks.useChainId()
  const account = hooks.useAccount()
  const [txHash, setTxHash] = useState<string>()
  const [pending, setPending] = useState<boolean>(false)
  const [incentiveId, setIncentiveId] = useState<string>()
  const [error, setError] = useState<string>()

  const { createIncentive, subscribe, unsubscribe } = useIncentiveCreate()
  // TODO: Consider if we need to approve max? at least on pool? lazy way and approving max on both atm.
  const poolApproval = useTokenApproval(data?.pool)
  const rewardTokenAproval = useTokenApproval(data?.rewardToken)

  const reset = useCallback(() => {
    if (!pending) {
      setIncentiveId(undefined)
      setTxHash(undefined)
      setError(undefined)
    }
  }, [pending])

  const onDismiss = useCallback(() => {
    reset()
    _onDismiss()
  }, [_onDismiss, reset])

  const execute = useCallback(async () => {
    if (!data) return

    setPending(true)

    try {
      const tx = await createIncentive(data)

      if (tx?.hash) {
        setTxHash(tx.hash.toLowerCase())
        await tx.wait()
      }
    } catch (e) {
      // @ts-ignore TYPE NEEDS FIXING
      setError(e.error?.message)
    } finally {
      setPending(false)
    }
  }, [createIncentive, data])

  // Subscribe to creation event to get created token ID
  useEffect(() => {
    // @ts-ignore TYPE NEEDS FIXING
    subscribe(
      'IncentiveCreated',
      (token, rewardToken, creator, id, amount, startTime, endTime, { transactionHash }) => {
        if (transactionHash?.toLowerCase() === txHash?.toLowerCase()) {
          setIncentiveId(id.toString())
        }
      },
    )

    return () => {
      unsubscribe('IncentiveCreated', () => console.log('unsubscribed'))
    }
  }, [subscribe, txHash, unsubscribe])

  if (!data) return <></>

  return (
    <HeadlessUIModal.Controlled isOpen={open} onDismiss={onDismiss} afterLeave={() => setTxHash(undefined)}>
      {!txHash ? (
        <HeadlessUIModal.Body className="lg:max-w-lg lg:min-w-lg">
          <HeadlessUIModal.Header
            onClose={onDismiss}
            header={'Create Incentive'}
            subheader={'Please review your entered details thoroughly.'}
          />
          <HeadlessUIModal.Content>
            <div className="grid items-center grid-cols-2">
              <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
                {'Pool address'}
              </Typography>
              <Typography
                weight={700}
                variant="sm"
                className="flex items-end gap-1.5 text-high-emphesis py-2 border-b border-dark-700"
              >
                {data.pool.address}
              </Typography>

              <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
                {'Reward token address'}
              </Typography>
              <Typography
                weight={700}
                variant="sm"
                className="flex items-end gap-1.5 text-high-emphesis py-2 border-b border-dark-700"
              >
                {data.rewardToken.address}
              </Typography>

              <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
                {'Token Amount'}
              </Typography>
              <Typography
                weight={700}
                variant="sm"
                className="flex items-end gap-1.5 text-high-emphesis py-2 border-b border-dark-700"
              >
                {data.amount.toSignificant(6)} {data.amount.currency.symbol}
              </Typography>

              <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
                Start Date
              </Typography>
              <Typography weight={700} variant="sm" className="py-2 border-b text-high-emphesis border-dark-700">
                {data.startDate.toLocaleString('en-uS', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  timeZone: 'UTC',
                })}{' '}
                UTC
              </Typography>
              <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
                End Date
              </Typography>
              <Typography weight={700} variant="sm" className="py-2 border-b text-high-emphesis border-dark-700">
                {data.endDate.toLocaleString('en-uS', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  timeZone: 'UTC',
                })}{' '}
                UTC
              </Typography>
            </div>
          </HeadlessUIModal.Content>

          <HeadlessUIModal.Actions>
            <HeadlessUIModal.Action onClick={onDismiss}>{'Cancel'}</HeadlessUIModal.Action>
            {poolApproval.approvalState === ApprovalState.PENDING ? (
              <HeadlessUIModal.Action main={true} disabled={true}>
                <Dots>Approving Pool</Dots>
              </HeadlessUIModal.Action>
            ) : poolApproval.approvalState === ApprovalState.NOT_APPROVED ? (
              <HeadlessUIModal.Action main={true} onClick={poolApproval.approve}>
                Approve Pool
              </HeadlessUIModal.Action>
            ) : (
              ''
            )}

            {rewardTokenAproval.approvalState === ApprovalState.PENDING ? (
              <HeadlessUIModal.Action main={true} disabled={true}>
                <Dots>Approving Reward Token</Dots>
              </HeadlessUIModal.Action>
            ) : rewardTokenAproval.approvalState === ApprovalState.NOT_APPROVED ? (
              <HeadlessUIModal.Action main={true} onClick={rewardTokenAproval.approve}>
                Approve Reward Token
              </HeadlessUIModal.Action>
            ) : (
              ''
            )}
            <HeadlessUIModal.Action
              main={true}
              {...(pending && {
                startIcon: (
                  <div className="w-4 h-4 mr-1">
                    <Lottie animationData={LoadingCircle} autoplay loop />
                  </div>
                ),
              })}
              disabled={
                pending ||
                poolApproval.approvalState !== ApprovalState.APPROVED ||
                rewardTokenAproval.approvalState !== ApprovalState.APPROVED
              }
              onClick={() => execute()}
            >
              Create Incentive
            </HeadlessUIModal.Action>
          </HeadlessUIModal.Actions>
          <HeadlessUIModal.Error>{error}</HeadlessUIModal.Error>
        </HeadlessUIModal.Body>
      ) : (
        <IncentiveCreationSubmittedModalContent txHash={txHash} incentiveId={incentiveId} onDismiss={onDismiss} />
      )}
    </HeadlessUIModal.Controlled>
  )
}

export default IncentiveCreationReviewModal
