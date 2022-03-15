import Form from 'app/components/Form'
import React, { FC } from 'react'

const GeneralDetailsStep: FC = () => {
  return (
    <>
      <div className="grid grid-cols-6 col-span-5 gap-8">
        <div className="col-span-5 md:col-span-2">
        <Form.TextField
            name="pool"
            label={'Token*'}
            helperText={'Enter a pool/token address'}
          />
        </div>
        <div className="col-span-5 md:col-span-2">
        <Form.TextField
            name="rewardToken"
            label={'Reward Token*'}
            helperText={'Enter a token address, this will be the reward token'}
          />
        </div>
        <div className="col-span-5 md:col-span-2">
          <Form.TextField
            name="amount"
            label={'Reward amount*'}
            placeholder={`0.00`}
            helperText={'The incentive reward amount will start at this value'}
          />
        </div>
        <div className="col-span-5 md:col-span-2">
          <Form.TextField
            className="inline-flex"
            type="datetime-local"
            name="startDate"
            label={`Start Date*`}
            placeholder={`Selected a start date for your incentive`}
            helperText={`Please enter your incentive start date`}
          />
        </div>
        <div className="col-span-5 md:col-span-2">
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
