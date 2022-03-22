import fetch from 'isomorphic-unfetch'
import { SafeBalance, SafeInfo } from '../'

export const getAllSafes = async (): Promise<SafeInfo[]> => {
  const [safes, balances] = await Promise.all([getSafesInfo(), getSafeBalancesInfo()])
  balances?.forEach((balance) => {
    safes.find((safe) => {
      if (safe?.chainId == balance?.chainId && safe?.address?.value == balance?.address) {
        safe.balance = balance.fiatTotal
      }
    })
  })

  return safes
}

export async function getSafesInfo() {
  //FIXME: url
  const response = await fetch('http://localhost:3000/dao/api/safes')
  const jsonData = await response.json()
  return jsonData as SafeInfo[]
}

export async function getSafeBalancesInfo() {
  //FIXME: url
  const response = await fetch('http://localhost:3000/dao/api/balances')
  const jsonData = await response.json()
  return jsonData as SafeBalance[]
}

export async function getSafeInfo(chainId: string, address: string) {
  //FIXME: url
  const response = await fetch(`http://localhost:3000/dao/api/safes/${chainId}/${address}`)
  if (response.status !== 200) {
    return Promise.reject(`No safe with address: ${address} was found`)
  }
  const jsonData = await response.json()
  return jsonData as SafeInfo
}

export async function getBalanceInfo(chainId: string, address: string) {
  //FIXME: url

  const response = await fetch(`http://localhost:3000/dao/api/balances/${chainId}/${address}`)
  if (response.status !== 200) {
    return Promise.reject(`Balance could not be found for ${address}`)
  }
  const jsonData = await response.json()
  return jsonData as SafeBalance
}
