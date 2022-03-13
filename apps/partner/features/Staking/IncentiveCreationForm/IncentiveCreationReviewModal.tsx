import { parseUnits } from '@ethersproject/units'
import { CurrencyAmount, JSBI } from '@sushiswap/core-sdk'
import LoadingCircle from 'app/animation/loading-circle.json'
import { hooks } from 'app/components/connectors/metaMask'
import HeadlessUIModal from 'app/components/Modal/HeadlessUIModal'
import Typography from 'app/components/Typography'
import { IncentiveCreationFormInputFormatted as IncentiveCreationFormInputFormatted } from 'app/features/Staking/IncentiveCreationForm'
import { getExplorerLink, shortenString } from 'app/functions'
import Lottie from 'lottie-react'
import React, { FC, useCallback, useEffect, useState } from 'react'
import IncentiveCreationSubmittedModalContent from './IncentiveCreationSubmittedModalContent'

interface IncentiveCreationModalProps {
  open: boolean
  onDismiss(): void
  data?: IncentiveCreationFormInputFormatted
}

const IncentiveCreationModal: FC<IncentiveCreationModalProps> = ({ open, onDismiss: _onDismiss, data }) => {
  const chainId = hooks.useChainId()
  const [txHash, setTxHash] = useState<string>()
  const [pending, setPending] = useState<boolean>(false)
  const [incentiveId, setIncentiveId] = useState<string>()
  const [error, setError] = useState<string>()

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

  const execute = (data: IncentiveCreationFormInputFormatted) => {
      
  }
  

  if (!data) return <></>

  return (
    <HeadlessUIModal.Controlled isOpen={open} onDismiss={onDismiss} afterLeave={() => setTxHash(undefined)}>
      {!txHash ? (
        <HeadlessUIModal.Body className="lg:max-w-lg lg:min-w-lg">
          <HeadlessUIModal.Header
            onClose={onDismiss}
            header={"Create Incentive"}
            subheader={"Please review your entered details thoroughly."}
          />
          <HeadlessUIModal.Content>
            <div className="grid items-center grid-cols-2">

              <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
                {"Token Amount"}
              </Typography>
              <Typography
                weight={700}
                variant="sm"
                className="flex items-end gap-1.5 text-high-emphesis py-2 border-b border-dark-700"
              >
                {data.amount.toSignificant(6)}{' '}
                <a
                  className="text-xs font-normal text-purple"
                  target="_blank"
                  rel="noreferrer"
                  href={getExplorerLink(chainId, data.amount.currency.address, 'address')}
                >
                  {data.amount.currency.symbol}
                </a>
              </Typography>

              <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
                {"Start Date"}
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
                {"End Date"}
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
            <HeadlessUIModal.Action onClick={onDismiss}>{"Cancel"}</HeadlessUIModal.Action>
            <HeadlessUIModal.Action
              main={true}
              {...(pending && {
                startIcon: (
                  <div className="w-4 h-4 mr-1">
                    <Lottie animationData={LoadingCircle} autoplay loop />
                  </div>
                ),
              })}
              disabled={pending}
              onClick={() => execute(data)}
            >
              {"Create Incentive"}
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

export default IncentiveCreationModal
