import { SafeInfo as GnosisSafeInfo } from '@gnosis.pm/safe-react-gateway-sdk'
interface SafeType {
  type: string
}

export type SafeInfo = GnosisSafeInfo & SafeType
