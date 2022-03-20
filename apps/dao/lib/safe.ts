import fetch from 'isomorphic-unfetch'
import { ChainId, Safe, SafeBalance, SafeInfo, safes } from '../'

const basicSafe = (safe: Safe): SafeInfo =>
  ({
    address: { value: safe.address },
    chainId: safe.chainId.toString(),
    type: safe.name,
    threshold: -1,
    balance: 'NA',
    owners: [],
  } as SafeInfo)

const basicBalance = (safe: Safe): SafeBalance =>
  ({ chainId: safe.chainId.toString(), address: safe.address } as SafeBalance)

export const getAllSafes = async (): Promise<SafeInfo[]> => {
  const [safes, balances] = await Promise.all([getSafes(), getBalances()])

  balances?.forEach((balance) => {
    const safe = safes.find((safe) => safe?.chainId == balance?.chainId && safe?.address.value == balance?.address)
    if (safe) {
      safe.balance = balance.fiatTotal
    }
  })

  return safes
}

const getSafes = (): Promise<SafeInfo[]> =>
  Promise.all(
    Object.entries(safes).map(async ([, safe]) => {
      const url = getSafeUrl(safe)
      const response = await fetch(url)
      if (response.status !== 200) {
        console.warn(
          `${url} returned status code: ${response.status}, skipping ${ChainId[safe.chainId]}, ${safe.address}`,
        )
        return basicSafe(safe)
      }
      const data = await response.json()
      updateSafeFields(data, safe.name, safe.chainId)
      data.balance = 'NA'
      return data as SafeInfo
    }),
  )

const getBalances = (): Promise<SafeBalance[]> =>
  Promise.all(
    Object.entries(safes)
      .filter(([, safe]) => safe.chainId !== ChainId.HARMONY)
      .map(async ([address, safe]) => {
        const url = `${safe.baseUrl}/chains/${safe.chainId}/safes/${address}/balances/USD/?exclude_spam=true&trusted=false`
        const response = await fetch(url)
        if (response.status !== 200) {
          console.warn(
            `${url} returned status code: ${response.status}, skipping ${ChainId[safe.chainId]}, ${safe.address}`,
          )
          return basicSafe(safe)
        }
        const data = await response.json()
        return { ...data, chainId: safe.chainId, address: safe.address }
      }),
  )

export const getSafe = async (chainId: string, address: string): Promise<SafeInfo> => {
  const safe = safes[address] ?? undefined
  if (!safe || safe?.chainId.toString() != chainId) {
    throw 'Invalid chain ID or address'
  }
  const url = getSafeUrl(safe)

  const response = await fetch(url)
  if (response.status !== 200) {
    console.warn(`${url} returned status code: ${response.status}, skipping ${ChainId[chainId]}, ${safe.address}`)
    return basicSafe(safe)
  }
  const data = await response.json()
  updateSafeFields(data, safe.name, safe.chainId)
  data.balance = 'NA'
  return data as SafeInfo
}

export const getBalance = async (chainId: string, address: string): Promise<SafeBalance> => {
  const safe = safes[address] ?? undefined
  if (!safe || safe?.chainId.toString() != chainId) {
    throw 'Invalid chain ID or address'
  }

  if (safe.chainId === ChainId.HARMONY) {
    throw 'Harmony gnosis API does not have balance endpoint'
  }

  const url = `${safe.baseUrl}/chains/${chainId}/safes/${address}/balances/USD/?exclude_spam=true&trusted=false`
  const response = await fetch(url)

  if (response.status !== 200) {
    console.warn(`${url} returned status code: ${response.status}, skipping ${ChainId[chainId]}, ${safe.address}`)
    return basicBalance(safe)
  }

  const data = await response.json()
  return { ...data, chainId, address } as SafeBalance
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

  if (data?.owners?.length && !data.owners[0]?.value) {
    data.owners = data.owners.map((owner) => ({ value: owner }))
  }

  if (!data.chainId) {
    data.chainId = chainId
  }
}
