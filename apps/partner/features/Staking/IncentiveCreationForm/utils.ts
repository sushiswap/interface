import { parseUnits } from '@ethersproject/units'
import { Currency, CurrencyAmount, JSBI, Price, Token } from '@sushiswap/core-sdk'
import { IncentiveCreationFormInputFormatted, IncentiveCreationFormInputValidated } from '.'

export const getPriceEntity = (price: string, auctionToken: Token, paymentToken: Currency) => {
  const base = CurrencyAmount.fromRawAmount(
    paymentToken,
    JSBI.BigInt(parseUnits(price, paymentToken.decimals).toString()),
  )
  const quote = CurrencyAmount.fromRawAmount(
    auctionToken,
    JSBI.BigInt(parseUnits('1', auctionToken.decimals).toString()),
  )
  return new Price({ baseAmount: quote, quoteAmount: base })
}

export const formatCreationFormData = (
  data: IncentiveCreationFormInputValidated,
  poolToken: Token,
  rewardToken: Token,
): IncentiveCreationFormInputFormatted => {
  const rewardAmount = CurrencyAmount.fromRawAmount(
    rewardToken,
    JSBI.BigInt(parseUnits(data.amount.toString(), rewardToken.decimals).toString()),
  )
  return {
    pool: poolToken,
    rewardToken,
    amount: rewardAmount,
    startDate: new Date(data.startDate),
    endDate: new Date(data.endDate),
  }
}
