import Form from 'app/components/Form'
// import AuctionPaymentCurrencyField from 'app/features/miso/AuctionAdminForm/AuctionPaymentCurrencyField'
import React, { FC } from 'react'

const GeneralDetailsStep: FC = () => {
  return (
    <>
       <div className="col-span-4 md:col-span-2">
        <Form.TextField
          name="amount"
          label={'Reward amount'}
          placeholder={`0.00`}
          helperText={'The incentive reward amount will start at this value'}
        />
      </div>
      <div className="col-span-4">
      </div>
      <div className="col-span-4 md:col-span-2">
        <Form.TextField
          className="inline-flex"
          type="datetime-local"
          name="startDate"
          label={`Start Date*`}
          placeholder={`Selected a start date for your auction`}
          helperText={`Please enter your auction start date`}
        />
      </div>
      <div className="col-span-4 md:col-span-2">
        <Form.TextField
          className="inline-flex"
          type="datetime-local"
          name="endDate"
          label={`End Date*`}
          placeholder={`Selected an end date for your auction`}
          helperText={`Please enter your auction end date`}
        />
      </div>
    </>
  )
}

export default GeneralDetailsStep
