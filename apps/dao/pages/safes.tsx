import { AddressEx, SafeInfo } from '@gnosis.pm/safe-react-gateway-sdk'
import { FC } from 'react'
import { safes, Safe, users, User, ChainId } from '../constants'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import { version } from 'os'

function parseVersion (str) {
  if (typeof(str) != 'string') { return false; }
  var x = str.split('.');
  // parse from string or default to 0 if can't parse
  var maj = parseInt(x[0]) || 0;
  var min = parseInt(x[1]) || 0;
  var pat = parseInt(x[2]) || 0;
  return {
      major: maj,
      minor: min,
      patch: pat
  }
}

const getSafes = (): Promise<SafeInfo[]> =>
  Promise.all(
    safes.map(({ baseUrl, chainId, address }) => fetch(`${baseUrl}/${address}`, {
      headers: {
        'Accept': 'application/json'
      },
    }
    )
    .then((response) => response.json()
    .then(data => {
      const semver = parseVersion(data.verison)
      if (semver && semver.minor < 30) {
          // OLD
          
      }
      return data as SafeInfo
    })
    ))
  )
  // v1.2 or 1.3?

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
      {safes.map((safe) => (
        <div key={`${safe.chainId}-${safe.address}`}>
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
