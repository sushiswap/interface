import { SafeBalanceResponse, SafeInfo as GnosisSafeInfo } from '@gnosis.pm/safe-react-gateway-sdk'

export type SafeInfo = GnosisSafeInfo & {
  type: string
  balance: string
}

export type SafeBalance = SafeBalanceResponse & {
  address: string
  chainId: string
}
