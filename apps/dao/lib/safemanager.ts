import { ChainId, Safe, safes } from '../constants'
import { SafeBalance, SafeInfo } from '../entities/safe'
import fetch from 'isomorphic-unfetch'

export const getSafes = async (): Promise<SafeInfo[]> => {
  const safes = await _getSafes()
  const balances = await getBalances()
  balances?.forEach((balance) => {
    const safe = safes.find((safe) => safe.chainId == balance.chainId && safe.address.value == balance.address)
    if (safe) {
      safe.balance = balance.fiatTotal
    }
  })
  return safes
}

const _getSafes = (): Promise<SafeInfo[]> =>
  Promise.all(
    safes.map((safe) =>
      fetch(getSafeUrl(safe))
        .then((response) => response.json())
        .then((data) => {
          updateSafeFields(data, safe.name, safe.chainId)
          data.balance = 'NA'
          return data as SafeInfo
        }),
    ),
  )

const getBalances = (): Promise<SafeBalance[]> =>
  Promise.all(
    safes
      .filter((safe) => safe.chainId !== ChainId.HARMONY)
      .map(({ baseUrl, chainId, address }) =>
        fetch(`${baseUrl}/chains/${chainId}/safes/${address}/balances/USD/?exclude_spam=true&trusted=false`)
          .then((response) => response.json())
          .then((data) => {
            data.chainId = chainId
            data.address = address
            return data as SafeBalance
          }),
      ),
  )

export const getSafe = (chainId: string, address: string): Promise<SafeInfo> => {
  const safe = safes.find(
    (safe) => safe.chainId.toString() === chainId && safe.address.toLowerCase() === address.toLowerCase(),
  )
  if (!safe) {
    return Promise.reject('Invalid chain ID or address')
  }
  return Promise.resolve(
    fetch(getSafeUrl(safe))
      .then((response) => response.json())
      .then((data) => {
        updateSafeFields(data, safe.name, safe.chainId)
        data.balance = 'NA'
        return data as SafeInfo
      }),
  )
}

export const getBalance = (chainId: string, address: string): Promise<SafeBalance> => {
  const safe = safes.find(
    (safe) => safe.chainId.toString() === chainId && safe.address.toLowerCase() === address.toLowerCase(),
  )
  if (!safe) {
    return Promise.reject('Invalid chain ID or address')
  }

  if (safe.chainId === ChainId.HARMONY) {
    return Promise.reject('Harmony gnosis API does not have balance endpoint')
  }
  return Promise.resolve(
    fetch(`${safe.baseUrl}/chains/${chainId}/safes/${address}/balances/USD/?exclude_spam=true&trusted=false`)
      .then((response) => response.json())
      .then((data) => {
        data.chainId = chainId
        data.address = address
        return data as SafeBalance
      }),
  )
}

const getSafeUrl = (safe: Safe): string => {
  return safe.chainId !== ChainId.HARMONY
    ? `${safe.baseUrl}/chains/${safe.chainId}/safes/${safe.address}`
    : `${safe.baseUrl}/safes/${safe.address}`
}

/**
 * Some gnosis network have different APIs, this function maps those fields to make the data compatible with @type {SafeInfo}
 * @param data json response
 * @param chainId
 */
function updateSafeFields(data: any, name: string, chainId: ChainId) {
  data.type = name
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
}
