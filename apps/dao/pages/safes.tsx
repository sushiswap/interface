import { AddressEx, SafeInfo } from '@gnosis.pm/safe-react-gateway-sdk'
import { FC } from 'react'
import useSWR from 'swr'
import { ChainId, users } from '../constants'
import { getSafes } from '../lib/safemanager'

interface SafesProps {
  safes: SafeInfo[]
}

const getUsers = (owners: AddressEx[]) => {
  return owners
    .map((owner) => users.get(owner.value) ?? owner.value)
    .sort()
    .join(' ')
}

const Safes: FC<SafesProps> = ({ safes }) => {
  const { data, error } = useSWR('safes', getSafes, { fallbackData: safes })

  return (
    <>
      <h1>Multisigs</h1>
      {safes.map((safe, i) => (
        <div key={`${safe.chainId}-${safe.address}${i}`}>
          {ChainId[safe.chainId]}      {safe.address.value}       {safe.threshold}        {getUsers(safe.owners)}
        </div>
      ))}
    </>
  )
}

export default Safes

export const getStaticProps = async () => {
  const safes = await getSafes()

  return {
    props: {
      safes,
    },
    revalidate: 60, // 60s
  }
}
