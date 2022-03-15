import Form from 'app/components/Form'
import { useToken } from 'app/hooks/Tokens'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { IncentiveCreationFormInput } from '.'
import Typography from 'app/components/Typography'

const GeneralDetailsStep: FC = () => {
  const { watch } = useFormContext<IncentiveCreationFormInput>()
  const data = watch()
  const rewardToken = useToken(data.rewardToken) ?? undefined
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-4 md:col-span-2">
        <Form.TextField
            name="pool"
            label={'Token*'}
            placeholder={`0x0000000000000000000000000000000000000000`}
            helperText={'Enter a pool/token address'}
          />
        </div>
        <div className="col-span-2 md:col-span-2">
        <Form.TextField
            name="rewardToken"
            label={'Reward Token*'}
            placeholder={`0x0000000000000000000000000000000000000000`}
            helperText={'Enter a token address, this will be the reward token'}
          />
        </div>
        <div className="col-span-4 md:col-span-2">
          <Form.TextField
            {...( rewardToken && {
              endIcon: (
                <Typography variant="sm" weight={700} className="text-secondary">
                  {rewardToken.symbol}
                </Typography>
              ),
            })}
            name="amount"
            label={'Reward amount*'}
            placeholder={`0.00`}
            helperText={'The incentive reward amount will start at this value'}
          />
        </div>
        <div className="col-span-4 md:col-span-2">
          <Form.TextField
            className="inline-flex"
            type="datetime-local"
            name="startDate"
            label={`Start Date*`}
            placeholder={`Selected a start date for your incentive`}
            helperText={`Please enter your incentive start date`}
          />
        </div>
        <div className="col-span-4 md:col-span-2">
          <Form.TextField
            className="inline-flex"
            type="datetime-local"
            name="endDate"
            label={`End Date*`}
            placeholder={`Selected an end date for your incentive`}
            helperText={`Please enter your incentive end date`}
          />
        </div>
      </div>
    </>
  )
}

export default GeneralDetailsStep
