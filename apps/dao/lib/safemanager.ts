import { SafeBalanceResponse, SafeInfo } from '@gnosis.pm/safe-react-gateway-sdk'
import { ChainId, safes } from '../constants'

export const getSafes = (): Promise<SafeInfo[]> =>
  Promise.all(
    safes.map(({ baseUrl, chainId, address }) =>
      fetch(
        chainId !== ChainId.HARMONY ? `${baseUrl}/chains/${chainId}/safes/${address}` : `${baseUrl}/safes/${address}`,
      ).then((response) =>
        response.json().then((data) => {
          updateFields(data, chainId)
          return data as SafeInfo
        }),
      ),
    ),
  )
export const getBalances = (): Promise<SafeBalanceResponse[]> =>
  Promise.all(
    safes
      .filter((safe) => safe.chainId !== ChainId.HARMONY)
      .map(({ baseUrl, chainId, address }) =>
        fetch(`${baseUrl}/chains/${chainId}/safes/${address}/balances/USD/?exclude_spam=true&trusted=false`).then(
          (response) =>
            response.json().then((data) => {
              return data as SafeBalanceResponse
            }),
        ),
      ),
  )

/**
 * Some gnosis network have different APIs, this function maps those fields to make the data compatible with @type {SafeInfo}
 * @param data json response
 * @param chainId
 */
function updateFields(data: any, chainId: ChainId) {
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
