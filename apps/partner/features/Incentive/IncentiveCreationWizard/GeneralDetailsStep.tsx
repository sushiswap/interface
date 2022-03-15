import Form from 'app/components/Form'
import React, { FC } from 'react'

const GeneralDetailsStep: FC = () => {
  return (
    <>
      <div className="col-span-4">
        <div className="col-span-4 md:col-span-2">
          <Form.SelectField
            name="pool"
            label={'Pool*'}
            helperText={'Select a pool'}
            options={[
              {
                label: '0xb7a4F3E9097C08dA09517b5aB877F7a917224ede', // USDC
                value: '0xb7a4F3E9097C08dA09517b5aB877F7a917224ede',
              },
              {
                label: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F', // SUSHI
                value: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
              },
              {
                label: '0x07de306FF27a2B630B1141956844eB1552B956B5', // USDT
                value: '0x07de306FF27a2B630B1141956844eB1552B956B5',
              }
              
            ]}
          />
        </div>
        <div className="col-span-4 md:col-span-2">
          <Form.SelectField
            name="rewardToken"
            label={'Reward Token*'}
            helperText={'Select a reward token'}
            options={[
              {
                label: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa',
                value: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa',
              },
            ]}
          />
        </div>
        <div className="col-span-4 md:col-span-2">
          <Form.TextField
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
