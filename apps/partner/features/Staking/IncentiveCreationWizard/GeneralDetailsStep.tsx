import Form from 'app/components/Form'
// import AuctionPaymentCurrencyField from 'app/features/miso/AuctionAdminForm/AuctionPaymentCurrencyField'
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
            // options={[
            //   { label: 'DAI/WETH', value: '0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0' },
            //   { label: 'USDC/WETH', value: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa' },
            // ]}
            options={[
              {
                label: '0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0',
                value: '0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0',
              },
            ]}
          />
        </div>
        <div className="col-span-4 md:col-span-2">
          <Form.SelectField
            name="rewardToken"
            label={'Reward Token*'}
            helperText={'Select a reward token'}
            // options={[
            //   { label: 'BAT', value: '0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0' },
            //   { label: 'USDC', value: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa' },
            // ]}
            options={[
              {
                label: '0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0',
                value: '0xc4cbede6c5cc7d0c775adfc76803c5888c1530f0',
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
