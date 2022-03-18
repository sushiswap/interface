import { AddressEx, SafeInfo } from '@gnosis.pm/safe-react-gateway-sdk'
import fetch from 'isomorphic-unfetch'
import { FC } from 'react'
import useSWR from 'swr'
import { ChainId, safes, users } from '../constants'

const getSafes = (): Promise<SafeInfo[]> =>
  Promise.all(
    safes.map(({ baseUrl, chainId, address }) =>
      fetch(
        chainId !== ChainId.HARMONY ? `${baseUrl}/chains/${chainId}/safes/${address}` : `${baseUrl}/safes/${address}`,
      ).then((response) =>
        response.json().then((data) => {
          if (!data.address?.value) {
            data.address = { value: data.address }
          }

          if (!data.owners[0]?.value) {
            const ownersValue = data.owners.map((owner) => {
              return { value: owner }
            })
            data.owners = ownersValue
          }

          if (!data.chainId) {
            data.chainId = chainId
          }
          return data as SafeInfo
        }),
      ),
    ),
  )

interface SafesProps {
  safes: SafeInfo[]
}

const getUsers = (owners: AddressEx[]) => {
  return owners.map((owner) => users.get(owner.value) ?? owner.value).join(' ')
}

const Safes: FC<SafesProps> = ({ safes }) => {
  const { data, error } = useSWR('safes', getSafes, { fallbackData: safes })

  return (
    <>
      <h1>Multisigs</h1>
      {safes.map((safe, i) => (
        <div key={`${safe.chainId}-${safe.address}${i}`}>
          {ChainId[safe.chainId]} {safe.address.value} {safe.threshold} {getUsers(safe.owners)}
        </div>
      ))}
    </>
  )
}

export default Safes

export const getStaticProps = async () => {
  const safes = await getSafes()

  console.log({ safes })

  return {
    props: {
      safes,
    },
    revalidate: 60, // 60s
  }
}
