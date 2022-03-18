import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWR from 'swr'
import { safes } from '../../../constants'
import { SafeBalance, SafeInfo } from '../../../entities/safe'
import { getBalance, getSafe } from '../../../lib/safemanager'

interface SafesProps {
  safe: SafeInfo
  balance: SafeBalance
}

const Safe: FC<SafesProps> = ({ safe, balance }) => {
  const router = useRouter()
  const chainId = router.query.chainId as string
  const address = router.query.address as string
  const { data: safeData, error: safeError } = useSWR('safe', () => getSafe(chainId, address), { fallbackData: safe })
  const { data: balanceData, error: balanceError } = useSWR('safe', () => getBalance(chainId, address), {
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
      <h1>Router</h1>
      <div>Address: {safe.address.value}</div>
      <div>balance: {balance?.fiatTotal}</div>
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
