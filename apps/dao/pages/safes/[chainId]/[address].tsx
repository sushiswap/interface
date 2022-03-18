import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWR from 'swr'
import { ChainId, EXPECTED_OWNER_COUNT, EXPECTED_THRESHOLD, safes, users } from '../../../constants'
import { SafeBalance, SafeInfo } from '../../../entities/safe'
import { formatNumber } from '../../../functions/format'
import { getBalance, getSafe } from '../../../lib/safemanager'

interface SafesProps {
  safe: SafeInfo
  balance: SafeBalance
}

const isValidThreshold = (threshold: number, ownerCount: number): boolean => {
  return threshold === EXPECTED_THRESHOLD && ownerCount === EXPECTED_OWNER_COUNT
}

const Safe: FC<SafesProps> = ({ safe, balance }) => {
  const router = useRouter()
  const chainId = router.query.chainId as string
  const address = router.query.address as string
  const { data: safeData, error: safeError } = useSWR('safe', () => getSafe(chainId, address), { fallbackData: safe })
  const { data: balanceData, error: balanceError } = useSWR('balance', () => getBalance(chainId, address), {
    fallbackData: balance,
  })
  if (router.isFallback) {
    return <div>loading...</div>
  }

  if (safeError || balanceError) {
    return <>error</>
  }

  if (!safeData || !balanceData) {
    return <>loading</>
  }
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
        { safe.owners
          .map((owner) => users.get(owner.value) ?? <p style={{ color: 'red' }}>{owner.value}</p>)
          .sort()
          .join(' ')}
      </div>
      <div>Total balance: {formatNumber(balance?.fiatTotal, true)}</div>
    </>
  )
}

export default Safe

export async function getStaticPaths() {
  const paths = safes.map((safe) => ({
    params: { chainId: safe.chainId.toString(), address: safe.address },
  }))
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  console.log('fetching')
  console.log(params.chainId, params.address)
  const safe = await getSafe(params.chainId, params.address)
  const balance = await getBalance(params.chainId, params.address)
  console.log(balance)
  return {
    props: {
      safe,
      balance,
    },
    revalidate: 60, // 60s
  }
}
