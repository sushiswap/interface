import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWR from 'swr'
import { ChainId, EXPECTED_OWNER_COUNT, EXPECTED_THRESHOLD, safes, users } from '../../../constants'
import { SafeBalance, SafeInfo } from '../../../types'
import { shortenAddress, formatUSD, formatNumber } from 'format'
import { getBalance, getSafe } from '../../../lib/safe'
import { parseUnits } from '@ethersproject/units'

interface SafesProps {
  safe: SafeInfo
  balance: SafeBalance
}

const isValidThreshold = (threshold: number, ownerCount: number): boolean => {
  return threshold === EXPECTED_THRESHOLD && ownerCount === EXPECTED_OWNER_COUNT
}

const Safe: FC<SafesProps> = (props) => {
  const router = useRouter()
  const chainId = router.query.chainId as string
  const address = router.query.address as string
  const { data: safe } = useSWR('safe', () => getSafe(chainId, address), { fallbackData: props.safe })
  const { data: balance } = useSWR('balance', () => getBalance(chainId, address), {
    fallbackData: props.balance,
  })
  return (
    <>
      <h1>Safe Info</h1>
      <h2>{`${ChainId[safe.chainId]}`}</h2>
      <div>Type: {safe.type}</div>
      <div>Address: {safe.address.value}</div>
      <div>
        Threshold:
        {isValidThreshold(safe.threshold, safe.owners.length) ? (
          `${safe.threshold} / ${safe.owners.length}`
        ) : (
          <div style={{ color: 'red' }}>
            {safe.threshold} / {safe.owners.length}
          </div>
        )}
      </div>
      <div>
        Owners:{' '}
        {safe.owners
          .map((owner) => users.get(owner.value) ?? <p style={{ color: 'red' }}>{owner.value}</p>)
          .sort()
          .join(' ')}
      </div>
      <div>Total balance: {formatUSD(balance?.fiatTotal)}</div>
      <div>
        <div>Token Address Amount USD</div>
        {balance.items
          .filter((token) => parseFloat(token.balance) > 0 && parseFloat(token.fiatBalance) > 0)
          .map((token) => (
            <p key={token.tokenInfo.address}>
              {`${token.tokenInfo.symbol}  ${shortenAddress(token.tokenInfo.address)}
              ${formatNumber(parseUnits(token.balance, token.tokenInfo.decimals).toString())} 
              ${formatUSD(token.fiatBalance)}`}
            </p>
          ))}
      </div>
    </>
  )
}

export default Safe

export async function getStaticPaths() {
  return {
    paths: safes.map((safe) => ({
      params: { chainId: safe.chainId.toString(), address: safe.address },
    })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const [safe, balance] = await Promise.all([
    getSafe(params.chainId, params.address),
    getBalance(params.chainId, params.address),
  ])
  return {
    props: {
      safe,
      balance,
    },
    revalidate: 60, // 60s
  }
}
