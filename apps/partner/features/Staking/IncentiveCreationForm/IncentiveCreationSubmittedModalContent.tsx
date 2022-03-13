
import loadingCircle from 'app/animation/loading-circle.json'
import { HeadlessUiModal } from 'app/components/Modal'
import Typography from 'app/components/Typography'
import Lottie from 'lottie-react'
import React, { FC } from 'react'

interface IncentiveCreationSubmittedModalContentProps {
  txHash?: string
  incentiveId?: string
  onDismiss(): void
}

const IncentiveCreationSubmittedModalContent: FC<IncentiveCreationSubmittedModalContentProps> = ({
  txHash,
  onDismiss,
  incentiveId
}) => {

  return (
    <HeadlessUiModal.SubmittedModalContent
      txHash={txHash}
      header={'Success!'}
      subheader={'Incentive creation transaction successfully submitted. '}
      onDismiss={onDismiss}
    >
      <div className="flex flex-col px-4 py-3 mt-4 border rounded bg-dark-900 border-dark-700">
        <Typography variant="sm" className="text-secondary">
          Incentive Id
        </Typography>
        {incentiveId ? (
          <Typography variant="sm" className="text-high-emphesis" weight={700}>
          </Typography>
        ) : (
          <div className="w-4 h-4">
            <Lottie animationData={loadingCircle} autoplay loop />
          </div>
        )}
      </div>
    </HeadlessUiModal.SubmittedModalContent>
  )
}

export default IncentiveCreationSubmittedModalContent
