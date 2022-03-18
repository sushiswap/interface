import { AddressEx, SafeBalanceResponse, SafeInfo } from '@gnosis.pm/safe-react-gateway-sdk'
import { FC } from 'react'
import useSWR from 'swr'
import { ChainId, users } from '../constants'
import { getSafes, getBalances } from '../lib/safemanager'

interface SafesProps {
  safes: SafeInfo[]
  balances: SafeBalanceResponse[]
}

const getUsers = (owners: AddressEx[]) => {
  return owners
    .map((owner) => users.get(owner.value) ?? owner.value)
    .sort()
    .join(' ')
}

const getTotalBalance = (balances: SafeBalanceResponse[]): string => {
  return "$" + balances.reduce((sum, current) => sum + parseInt(current.fiatTotal), 0)
}

const Safes: FC<SafesProps> = ({ safes, balances }) => {
  useSWR('safes', getSafes, { fallbackData: safes })
  useSWR('balances', getBalances, { fallbackData: balances })

  return (
    <>
      <h1>Multisigs</h1>
      {safes.map((safe, i) => (
        <div key={`${safe.chainId}-${safe.address}${i}`}>
          {ChainId[safe.chainId]} {safe.address.value} {safe.threshold} {getUsers(safe.owners)}
        </div>
      ))}

      {balances.map((balance, i) => (
        <div key={`${balance.fiatTotal}-${i}`}>{balance.fiatTotal}</div>
      ))}

      <h2>Balance</h2>
      {getTotalBalance(balances)}
    </>
  )
}

export default Safes

export const getStaticProps = async () => {
  const safes = await getSafes()
  const balances = await getBalances()

  return {
    props: {
      safes,
      balances,
    },
    revalidate: 60, // 60s
  }
}
