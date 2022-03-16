import { yupResolver } from '@hookform/resolvers/yup'
import { CurrencyAmount, Token } from '@sushiswap/core-sdk'
import Button from 'app/components/Button'
import { hooks } from 'app/components/connectors/metaMask'
import Form from 'app/components/Form'
import { formatCreationFormData } from 'app/features/Incentive/IncentiveCreationForm/utils'
import { addressValidator } from 'app/functions'
import { getToken } from 'app/hooks/Tokens'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import GeneralDetailsStep from './GeneralDetailsStep'
import IncentiveCreationReviewModal from './IncentiveCreationReviewModal'


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
  pool: addressValidator.required('Must enter a valid address'),
  rewardToken: addressValidator.required('Must enter a valid address'),
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
  const chainId = hooks.useChainId()
  const provider = hooks.useProvider()
  const [open, setOpen] = useState<boolean>(false)

  const [tokens, setTokens] = useState([])
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

  const getTokens = useCallback(
    async () => [await getToken(chainId, provider, data.pool), await getToken(chainId, provider, data.rewardToken)],
    [chainId, data.pool, data.rewardToken, provider],
  )

  useEffect(() => {
    const fetch = async () => {
      try {
        setTokens(await getTokens())
      } catch (e) {
        console.log(e)
      }
    }
    fetch()
  }, [getTokens])

  const [token, rewardToken] = tokens

  const formattedData =
    token && rewardToken && !isValidating && isValid
      ? formatCreationFormData(data as IncentiveCreationFormInputValidated, token, rewardToken)
      : undefined

  const handleSubmit = () => setOpen(true)
  return (
    <>
      <Form {...methods} onSubmit={methods.handleSubmit(handleSubmit)}>
        <Form.Card className="divide-none">
          <Form.Section
            header={
              <div className={'border-b-2 border-dark-700 pb-4'}>
                <Form.Section.Header header={`General Details`} />
              </div>
            }
          >
            <GeneralDetailsStep />
            <Form.Submit>
              <div>
                <Button disabled={!formattedData} color="blue" type="submit">
                  Review
                </Button>
              </div>
            </Form.Submit>
          </Form.Section>
        </Form.Card>
      </Form>

      <IncentiveCreationReviewModal open={open} onDismiss={() => setOpen(false)} data={formattedData} />
    </>
  )
}

export default IncentiveCreationForm
