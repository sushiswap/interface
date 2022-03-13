import { yupResolver } from '@hookform/resolvers/yup'
import { Currency, CurrencyAmount, NATIVE, Price, Token } from '@sushiswap/core-sdk'
import Button from 'app/components/Button'
import { hooks } from 'app/components/connectors/metaMask'
import Form from 'app/components/Form'
// import IncentiveCreationReviewModal from 'app/features/Staking/IncentiveCreationForm/IncentiveCreationReviewModal'
// import { formatCreationFormData } from 'app/features/Staking/IncentiveCreationForm/utils'
import { addressValidator } from 'app/functions'
// import { useToken } from 'app/hooks/Tokens'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import GeneralDetailsStep from '../IncentiveCreationWizard/GeneralDetailsStep'

export interface IncentiveCreationFormInput {
  pool?: string
  rewardToken?: string
  amount?: number
  startDate?: string
  endDate?: string
}

export interface IncentiveCreationFormInputValidated {
  pool: string
  rewardToken: string
  amount: number
  startDate: string
  endDate: string
}

export interface IncentiveCreationFormInputFormatted {
  pool: Token
  rewardToken: Token
  amount: CurrencyAmount<Token>
  startDate: Date
  endDate: Date
}

const schema = yup.object().shape({
  pool: addressValidator.required('Must enter a valid ERC-20 address'),
  rewardToken: addressValidator.required('Must enter a valid ERC-20 address'),
  amount: yup
    .number()
    .typeError('Amount must be a number')
    .moreThan(0, 'Token amount must be greater than zero')
    .required('Must enter a valid number'),
  startDate: yup.date().min(new Date(), 'Start date may not be due already').required('Must enter a valid date'),
  endDate: yup
    .date()
    .min(yup.ref('startDate'), 'Date must be later than start date')
    .required('Must enter a valid date'),
})

const IncentiveCreationForm: FC = () => {
  const { query } = useRouter()
  const chainId = hooks.useChainId()
  const [open, setOpen] = useState<boolean>(false)
  const methods = useForm<IncentiveCreationFormInput>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    mode: 'onChange',
  })

  const {
    watch,
    formState: { isValid, isValidating },
  } = methods

  const data = watch()

  // const poolToken = useToken(data.pool) ?? undefined
  // const rewardToken = useToken(data.rewardToken) ?? undefined
  let poolToken = null
  let rewardToken = null
  // @ts-ignore TYPE NEEDS FIXING
  const formattedData =
    poolToken && rewardToken && !isValidating && isValid
      ? // ? formatCreationFormData(data as IncentiveCreationFormInputValidated, poolToken, rewardToken)
        undefined
      : undefined

  const handleSubmit = () => setOpen(true)

  return (
    <>
      <Form {...methods} onSubmit={methods.handleSubmit(handleSubmit)}>
        <Form.Card className="divide-none">
          <Form.Section header={<Form.Section.Header header={`General Details`} />}>
            <GeneralDetailsStep />
          </Form.Section>
          <Button disabled={!formattedData} color="blue" type="submit">
            {`Review`}
          </Button>
        </Form.Card>
      </Form>
      {/* <AuctionCreationReviewModal open={open} onDismiss={() => setOpen(false)} data={formattedData} /> */}
    </>
  )
}

export default IncentiveCreationForm
