import { ChainId, safes } from '../constants'
import { SafeBalance, SafeInfo } from '../entities/safe'

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
    safes.map(({ baseUrl, name, chainId, address }) =>
      fetch(
        chainId !== ChainId.HARMONY ? `${baseUrl}/chains/${chainId}/safes/${address}` : `${baseUrl}/safes/${address}`,
      ).then((response) =>
        response.json().then((data) => {
          updateSafeFields(data, name, chainId)
          data.balance = 'NA'
          return data as SafeInfo
        }),
      ),
    ),
  )
const getBalances = (): Promise<SafeBalance[]> =>
  Promise.all(
    safes
      .filter((safe) => safe.chainId !== ChainId.HARMONY)
      .map(({ baseUrl, chainId, address }) =>
        fetch(`${baseUrl}/chains/${chainId}/safes/${address}/balances/USD/?exclude_spam=true&trusted=false`).then(
          (response) =>
            response.json().then((data) => {
              data.chainId = chainId
              data.address = address
              return data as SafeBalance
            }),
        ),
      ),
  )

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
